const fs = require("fs");
const pfm = require("postcss-font-magician");
const postcss = require("postcss");
const tinyColor = require("tinycolor2");
const StyleDictionary = require("style-dictionary");

function sanitizeStr(str) {
  return str.replace(/'/gi, "");
}

StyleDictionary.registerAction({
  name: "generate_fonts",
  undo() {
    fs.unlinkSync("./src/fonts.css");
  },
  async do({
    properties: {
      font: { weight, family },
    },
  }) {
    const mock = Object.keys(family).reduce(
      (acc, font) => `${acc}.${font}{font-family:"${family[font].value}";}`,
      ""
    );

    const families = Object.keys(family).reduce(
      (acc, font) => ({
        ...acc,
        [family[font].value]: {
          variants: {
            ...Object.keys(weight).reduce(
              ({ normal, italic }, variation) => {
                const path = `./src/fonts/${sanitizeStr(family[font].value)}`;

                const normalFile = `${path}/${variation}.woff2`;
                const italicFile = `${path}/${variation}-italic.woff2`;

                if (!fs.existsSync(normalFile)) {
                  return { normal, italic };
                }

                return {
                  normal: {
                    ...normal,
                    [weight[variation].value]: { url: { woff2: normalFile } },
                  },
                  italic: {
                    ...italic,
                    [weight[variation].value]: { url: { woff2: italicFile } },
                  },
                };
              },
              { normal: {}, italic: {} }
            ),
          },
        },
      }),
      {}
    );

    const { css } = await postcss([pfm({ custom: families })]).process(mock, {
      from: undefined,
    });

    fs.writeFileSync(
      "./src/fonts.css",
      css.replace(mock, "").replace(/src\//gi, "")
    );
  },
});

StyleDictionary.registerTransform({
  name: "time/seconds",
  type: "value",
  matcher: function (prop) {
    return prop.attributes.category === "time";
  },
  transformer: function (token) {
    return `${+token.original.value}s`;
  },
});

StyleDictionary.registerTransform({
  name: "color/patch-css",
  type: "value",
  matcher: function (prop) {
    return prop.attributes.category === "color";
  },
  transformer: function (token) {
    if (token.value === "transparent") {
      return "transparent";
    }

    const color = tinyColor(token.value);

    if (color.getAlpha() === 1) {
      return color.toHexString();
    }
    return color.toRgbString();
  },
});

StyleDictionary.registerTransform({
  name: "color/patch-hex",
  type: "value",
  matcher: function (prop) {
    return prop.attributes.category === "color";
  },
  transformer: function (token) {
    if (token.value === "transparent") {
      return "transparent";
    }

    const color = tinyColor(token.value);

    return color.toHexString();
  },
});

function excludeFontAssetsTokens(token) {
  return !(
    token.attributes.category === "font" && token.attributes.type === "asset"
  );
}

module.exports = {
  source: ["./src/properties/**/*.json"],
  platforms: {
    ts: {
      files: [
        {
          format: "javascript/es6",
          filter: excludeFontAssetsTokens,
          options: { showFileHeader: false },
          destination: "variables.ts",
        },
      ],
      actions: ["generate_fonts"],
      buildPath: "src/",
      transforms: [
        "attribute/cti",
        "name/cti/pascal",
        "size/rem",
        "color/patch-hex",
      ],
    },
    css: {
      files: [
        {
          format: "css/variables",
          options: { showFileHeader: false },
          destination: "variables.css",
        },
      ],
      buildPath: "src/",
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/patch-css",
      ],
    },
  },
};
