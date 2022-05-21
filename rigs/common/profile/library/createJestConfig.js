const path = require("path");
const process = require("process");

function createJestConfig() {
  return {
    transform: {
      ".(ts|tsx)$": require.resolve("ts-jest"),
      ".(js|jsx)$": require.resolve("babel-jest"),
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        path.resolve(__dirname, "transformers/file.js"),
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testMatch: ["<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}"],
    testURL: "http://localhost",
    testEnvironment: "jsdom",
    rootDir: process.cwd(),
    collectCoverage: true,
    moduleNameMapper: {
      "\\.(css)$": "identity-obj-proxy",
    },
    globals: {
      __DEV__: true,
      "ts-jest": {
        tsconfig: "tsconfig.json",
        packageJson: "package.json",
      },
    },
    collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.stories.tsx"],
    setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.js")],
  };
}

exports.createJestConfig = createJestConfig;
