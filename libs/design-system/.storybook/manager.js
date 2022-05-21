import { addons } from '@storybook/addons';
import * as config from '@agi/common-rig/profile/storybook/manager';

addons.setConfig({ theme: { ...config.theme } });
