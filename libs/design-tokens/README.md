# Design Tokens

Biblioteca para gerenciamento e construção dos [design tokens](https://brasil.uxdesign.cc/o-que-s%C3%A3o-design-tokens-cd408431727d) utilizados nos projetos do Agi.

## Como usar

Caso o objetivo seja utilizar em um projeto ou biblioteca dentro desse monorepo, utilize o comando `rush add --package @agi/design-tokens`, caso não seja esse o objetivo, você pode utilizar o gerenciador de sua preferência instalando o pacote `@agi/design-tokens`.

### JS/TS

```typescript
/* importando todos os design tokens */
import * as designTokens from "@agi/design-tokens";

/* importando um design token específico */
import { NomeDoDesignToken } from "@agi/design-tokens";
```

### CSS

```css
/* caso você utilize um bundler que reconhece a propriedade `style` do package.json */
@import "@agi/design-tokens";

/* caso seu bundler não reconheça a propriedade `style` do package.json */
@import "@agi/design-tokens/dist/design-tokens.cjs.production.min.css";

body {
  font-family: var(--font-family-base);
}
```

## Adicionando um design token

Para fazer o gerenciamento dos design token utilizamos o [Style Dictionary](https://amzn.github.io/style-dictionary/), essa ferramenta converte os design tokens contidos na pasta [./src/properties](./src/properties) para as plataformas configuradas no [./config.js](./config.js).

Para adicionar um design token, basta inseri-lo em um dos arquivos contidos na pasta [./src/properties](./src/properties).

## Adicionando uma fonte

Para adicionar uma fonte nova, basta criar uma pasta dentro de [./src/fonts](./src/fonts) com o nome da fonte, adicionar as suas variações seguindo o padrão: black, bold, extra-bold, extra-light, light, medium, regular, semi-bold e thin (caso possua versões em itálico, basta adicionar um hífen, por exemplo: extra-bold-italic) no formato WOFF2 e adicionar o nome da fonte (mesmo nome da pasta criada) na propriedade `font.family.${NOME_DO_TOKEN}` no arquivo [./src/properties/font.json](./src/properties/font.json). Dessa forma, o comando `build` automaticamente gera as variações de fontface da fonte nova.

## Comandos

- `rushx build`: executa o comando `generate` e constrói a biblioteca
- `rushx clean`: remove os todos os design tokens convertidos
- `rushx generate`: converte os design tokens contidos na pasta [./src/properties](./src/properties) para as plataformas configuradas no [./config.js](./config.js)
