const fs = require('fs').promises;
const dts = require('vite-plugin-dts');
const path = require('path');
const axios = require('axios');
const { build } = require('vite');

const { version } = require('./package.json');

const [pipe] = process.argv.slice(2);

function handleException(e) {
  console.log(e);
  process.exit(1);
}

function handleSuccess() {
  process.exit(0);
}

async function buildIcons() {
  try {
    const {
      data: { access_token: accessToken },
    } = await axios.post(
      'https://api.fontawesome.com/token',
      {},
      {
        headers: {
          Authorization: 'Bearer CE166E7E-5B1B-4E9D-BEC6-7980D40ACDFF',
        },
      },
    );

    const {
      data: { data },
    } = await axios.post(
      'https://api.fontawesome.com/query',
      {
        query: `
        {
          me {
            kit(token: "c2b0f755b6") {
              iconUploads {
                name
              }
            }
          }
        }
      `,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    let file = '// NÃO ALTERAR ESSE ARQUIVO, ELE É GERADO DINAMICAMENTE NO PROCESSO DE BUILD\n\n';

    file += `${data.me.kit.iconUploads.reduce(
      (acc, { name }) => `${acc}\n  '${name}',`,
      'export const ICON_NAME = [',
    )}\n] as const;\n\n`;
    file += 'export type IconName = typeof ICON_NAME[number];\n';

    await fs.writeFile(path.resolve(__dirname, 'src/components/icon/constants.ts'), file);
  } catch (e) {
    handleException(e);
  }
}

async function generateLibraryVersion() {
  const providerPath = path.resolve(__dirname, 'src/components/provider/provider.tsx');
  const providerFile = await (await fs.readFile(providerPath)).toString();
  const previousVersion = "const version = 'development'";
  const nextVersion = `const version = '${version}'`;

  await fs.writeFile(providerPath, providerFile.replace(previousVersion, nextVersion));

  return () => fs.writeFile(providerPath, providerFile.replace(nextVersion, previousVersion));
}

async function buildLibrary() {
  try {
    const undoVersion = await generateLibraryVersion();

    await build({
      build: {
        lib: {
          entry: 'src/index.ts',
          formats: ['cjs', 'esm'],
          fileName: 'index',
        },
        rollupOptions: {
          external: ['react', 'react-dom', '@agi/design-tokens'],
        },
      },
      plugins: [
        dts.default({
          exclude: ['src/**/*.stories.tsx'],
        }),
      ],
      css: {
        modules: {
          generateScopedName: '[hash:base64:5]',
          hashPrefix: 'prefix',
        },
      },
    });

    await undoVersion();
  } catch (e) {
    await undoVersion();

    handleException(e);
  }
}

if (pipe === 'library') {
  buildLibrary().then(handleSuccess);
} else if (pipe === 'icons') {
  buildIcons().then(handleSuccess);
} else {
  buildIcons().then(buildLibrary).then(handleSuccess).catch(handleException);
}
