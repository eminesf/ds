import React, { useCallback, useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { Button } from '../../button';

import type { SiteCookieConsentProps } from '.';
import {
  resetSiteCookieConsent,
  SiteCookieConsent,
  SiteCookieConsentLanguages,
} from './site-cookie-consent';

export default {
  title: 'Site/CookieConsent',
  component: SiteCookieConsent,
  args: {
    onGrant: action('grant'),
  },
  argTypes: {
    lang: {
      defaultValue: SiteCookieConsentLanguages.PT,
      table: {
        defaultValue: { summary: SiteCookieConsentLanguages.PT },
      },
      control: {
        type: 'select',
        options: Object.values(SiteCookieConsentLanguages),
      },
    },
  },
} as Meta;

export const Default: Story<SiteCookieConsentProps> = (args) => {
  const [granted, setGranted] = useState(false);

  const handleGrant = useCallback(() => {
    setGranted(true);
  }, []);

  const handleReset = useCallback(() => {
    resetSiteCookieConsent();

    window.location.reload();
  }, []);

  return (
    <>
      <SiteCookieConsent {...args} onGrant={handleGrant} />
      {granted ? <Button onPress={handleReset}>Reiniciar</Button> : null}
    </>
  );
};

Default.storyName = 'Padrão';
