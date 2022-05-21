const { build } = require("esbuild");

function createBuild({ external = [], entryPoints = ["src/index.ts"] } = {}) {
  return Promise.all(
    ["cjs", "esm"].map((format) =>
      build({
        format,
        outdir: "dist",
        define: { "process.env.NODE_ENV": '"production"' },
        minify: true,
        bundle: true,
        loader: { ".woff2": "file" },
        external,
        sourcemap: true,
        entryPoints,
        outExtension: { ".js": `.${format}.js` },
      }).catch((error) => {
        console.log(error);
        process.exit(1);
      })
    )
  );
}

exports.createBuild = createBuild;
