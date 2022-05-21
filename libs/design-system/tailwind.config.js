const { createTailwindConfig } = require('@agi/tailwind-rig/profile/default/createTailwindConfig');

const tailwindConfig = createTailwindConfig();

module.exports = {
  ...tailwindConfig,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**.tsx'],
    layers: ['components', 'utilities'],
    options: {
      keyframes: true,
    },
  },
};
