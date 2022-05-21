import {
  BorderRadiusCircle,
  BorderRadiusPill,
  ColorPrimary200,
  ColorPrimary300,
  ColorSuccess200,
  ColorSupport100,
  ColorSupport200,
  FontFamilyBase,
  FontWeightSemiBold,
} from '@agi/design-tokens';

type UbotsWC = {
  init: (config: { remoteConfiguration: string; onConfigurationLoaded: () => void }) => void;
  openChat: () => void;
  hidePanel: () => void;
  removeWebchat: () => void;
  destroySession: () => void;
};

declare global {
  interface Window {
    UbotsWC: UbotsWC;
  }
}

type InitReturn = {
  open: () => void;
  close: () => void;
  destroy: () => void;
};

type InitParameters = {
  key: string;
};

async function init({ key }: InitParameters) {
  return new Promise<InitReturn>((resolve) => {
    let styleLoaded = false;
    let scriptLoaded = false;

    /**
     * Forma de customização apresentada na documentação da Ubots não funciona, por conta disso
     * trocamos diretamente o ícone utilizado no botão de abertura do chat via innerHTML.
     */
    function customizeIcons() {
      const chatEl = document.querySelector('#ubots-webchat-icon');

      if (chatEl) {
        chatEl.innerHTML = `
          <svg aria-hidden="true" focusable="false" role="img" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 40C4 20.1177 20.1177 4 40 4V4C59.8823 4 76 20.1177 76 40V40C76 59.8823 59.8823 76 40 76V76C20.1177 76 4 59.8823 4 40V40Z" fill="#266BFF"></path>
            <path d="M51.9375 24H27.9375C25.6875 24 23.9375 25.8125 23.9375 28V45.9375C23.9375 48.125 25.6875 49.875 27.9375 49.875H33.9375V55.0625C33.9375 55.6875 34.625 56 35.125 55.6875L42.9375 49.8125H51.9375C54.125 49.8125 55.9375 48 55.9375 45.875V28C55.9375 25.8125 54.1875 24 51.9375 24ZM54 46C54 47.125 53.0625 48 52 48H42.9375C42.5 48 42.125 48.1875 41.75 48.4375L36 52.75V49C36 48.5 35.5 48 35 48H28C26.875 48 26 47.125 26 46V28C26 26.9375 26.875 26 28 26H52C53.0625 26 54 26.9375 54 28V46ZM41 39H33C32.4375 39 32 39.5 32 40C31.9375 40.5625 32.4375 41 33 41H41C41.5 41 41.9375 40.5625 41.9375 40C41.9375 39.5 41.5 39 41 39ZM47 33H33C32.4375 33 32 33.5 32 34C31.9375 34.5625 32.4375 35 33 35H47C47.5 35 47.9375 34.5625 47.9375 34C47.9375 33.5 47.5 33 47 33Z" fill="white"></path>
            <path d="M40 74C21.2223 74 6 58.7777 6 40H2C2 60.9868 19.0132 78 40 78V74ZM74 40C74 58.7777 58.7777 74 40 74V78C60.9868 78 78 60.9868 78 40H74ZM40 6C58.7777 6 74 21.2223 74 40H78C78 19.0132 60.9868 2 40 2V6ZM40 2C19.0132 2 2 19.0132 2 40H6C6 21.2223 21.2223 6 40 6V2Z" fill="white"></path>
            <rect x="5" y="5" width="19.0162" height="19.0162" rx="9.50811" fill="${ColorSuccess200}" stroke="white" stroke-width="2"></rect>
          </svg>
        `;
      }

      const closeEls: Array<Element> = Array.prototype.slice.call(
        document.querySelectorAll('.ubots-minimize-icon, .ubots-close-icon'),
      );

      if (closeEls.length) {
        closeEls.forEach((el) => {
          // eslint-disable-next-line no-param-reassign
          el.innerHTML = `
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M380.001 380.8c-4.802 4.8-13.601 4.8-18.401 0L256 274.401 149.6 380.8c-4.8 4.8-13.6 4.8-18.4 0-4.8-4.8-4.8-13.599 0-18.401L237.6 256 131.2 150.4c-4.8-4.8-4.8-13.6 0-18.4 4.8-4.8 13.6-4.8 18.4 0L256 238.4 361.6 132c4.8-4.8 13.599-4.8 18.401 0 4.798 4.8 4.798 13.6 0 18.4L273.6 256l106.401 106.399c4.798 4.802 4.798 13.601 0 18.401z"></path>
            </svg>
          `;
        });
      }
    }

    async function handleLoad() {
      const api = {
        open: window.UbotsWC.openChat,
        close: window.UbotsWC.hidePanel,
        destroy() {
          window.UbotsWC.destroySession();
          window.UbotsWC.removeWebchat();
        },
      };

      api.destroy();

      window.UbotsWC.init({
        remoteConfiguration: `https://ubots-webchat.s3.amazonaws.com/prod/config/${key}`,
        onConfigurationLoaded() {
          customizeIcons();

          resolve(api);
        },
      });
    }

    function handleStyleLoad() {
      styleLoaded = true;

      if (styleLoaded && scriptLoaded) handleLoad();
    }

    function handleScriptLoad() {
      scriptLoaded = true;

      if (scriptLoaded && styleLoaded) handleLoad();
    }

    /* istanbul ignore else  */
    if (!document.querySelector('#injected-chat-style')) {
      const link = document.createElement('link');
      link.id = 'injected-chat-style';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.ubots.com.br/webchat/ubots.min.css';
      link.addEventListener('load', handleStyleLoad, { once: true });

      const style = document.createElement('style');
      style.innerHTML = `
        .wc-header,
        .ubots-form-footer button,
        .wc-message-from-me .wc-message-content,
        .wc-carousel button.scroll {
          background-color: ${ColorPrimary200};  
        }

        .ubots-chat-box {
          z-index: 99999;
        }

        .ubots-form-footer button {
          color: ${ColorSupport100};
          font-weight: ${FontWeightSemiBold};
          border-radius: ${BorderRadiusPill};
        }

        .wc-carousel button.scroll {
          border: none;
          border-radius: ${BorderRadiusCircle};
        }

        .wc-carousel button.scroll:hover {
          background-color: ${ColorPrimary300};
        }

        .wc-card button {
          color: ${ColorPrimary300};
          font-weight: ${FontWeightSemiBold};
          border-color: ${ColorPrimary300};
          border-radius: ${BorderRadiusPill};
        }

        .ubots-form > *,
        #ubots-form-div,
        .ubots-reset > *
        #ubots-form-div > * {
          font-family: ${FontFamilyBase};
        }

        .wc-card button:hover {
          color: ${ColorSupport100};
          border-color: ${ColorSupport100};
          background-color: ${ColorPrimary300};
        }

        .wc-send svg path {
          fill: ${ColorPrimary200};
        }

        #ubots-form-div,
        .wc-message-pane {
          background: ${ColorSupport200};
        }

        @media only screen and (max-device-width: 480px), only screen and (max-width: 825px) and (max-height: 600px) {
          .wc-header {
            border-radius: 0;
          }      
        }
      `;

      document.head.appendChild(link);
      document.head.appendChild(style);
    } else {
      handleStyleLoad();
    }

    /* istanbul ignore else  */
    if (!document.querySelector('#injected-chat-script')) {
      const script = document.createElement('script');
      script.id = 'injected-chat-script';
      script.async = true;
      script.defer = true;
      script.src = 'https://cdn.ubots.com.br/webchat/ubots.min.js';
      script.addEventListener('load', handleScriptLoad, { once: true });

      document.head.appendChild(script);
    } else {
      handleScriptLoad();
    }
  });
}

export { init as chatInit };
export type { InitParameters as ChatInitParameters, InitReturn as ChatInitReturn };
