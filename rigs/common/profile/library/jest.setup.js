const matchMediaPolyfill = require("mq-polyfill").default;

require("@testing-library/jest-dom");

matchMediaPolyfill(window);

/* Deixar mobile como screen inicial */
const DEFAULT_WIDTH = 360;
const DEFAULT_HEIGHT = 740;

rewriteSize({
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
});

function rewriteSize({ width, height }) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height,
  });
}

window.resizeTo = function resizeTo(width, height) {
  rewriteSize({
    width,
    height,
  });

  this.dispatchEvent(new this.Event("resize"));
};

beforeEach(() => {
  rewriteSize({
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  });
});

/**
 * Corrige {@link https://github.com/jsdom/jsdom/issues/1423|bug do JSDOM}
 */
if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}
