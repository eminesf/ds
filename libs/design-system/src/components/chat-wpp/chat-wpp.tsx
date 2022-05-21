import React from 'react';
import cn from 'clsx';

import { Flex } from '../flex';

import ChatIcon from './chat-icon';
import CloseIcon from './close-icon';
import WppIcon from './wpp-icon';
import styles from './chat-wpp.module.css';

interface Props {
  keyChat: string;
  colorChat: string;
  canalChat: string;
  originChat: string;
  phoneWpp: string;
  messageWpp: string;
}

function ChatWhatsapp({ keyChat, colorChat, canalChat, originChat, phoneWpp, messageWpp }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const addBlipChatScript = React.useCallback(() => {
    const chat = document.createElement('script');

    chat.src = 'https://unpkg.com/blip-chat-widget';
    chat.type = 'text/javascript';

    const chatInstance = document.createElement('script');
    chatInstance.id = 'blip-chat-site';
    chatInstance.defer = true;

    chatInstance.innerHTML = `
    (function runBlipChat() {
      if(typeof BlipChat === 'function') {
          new BlipChat()
            .withAppKey('${keyChat}')
            .withButton({ color: '${colorChat}', icon: '' })
            .withCustomCommonUrl(
              'https://agibank-atendimento.chat.blip.ai/',
            )
            .withAccount({
              extras: {
                canal: '${canalChat}',
                origin: '${originChat}'
              },
            })
            .withEventHandler(BlipChat.LOAD_EVENT, function(){
              const iframe = document.getElementById("blip-chat-iframe");
              iframe.contentWindow.postMessage({ code: "ShowCloseButton", showCloseButton: true }, iframe.src);	
            })
            .build();

            return document.querySelector('.${styles['chat-wpp']}').style.visibility = 'visible';
      } else {
        setTimeout(() => {
          runBlipChat()
        }, 2000);
      }
    })();
  `;
    document.head.appendChild(chat);
    setTimeout(() => {
      document.head.appendChild(chatInstance);
    }, 500);
  }, [canalChat, originChat]);

  React.useEffect(() => {
    addBlipChatScript();

    return () => {
      document.getElementById('blip-chat-container')?.remove();
      document.getElementById('blip-chat-site')?.remove();
    };
  }, [addBlipChatScript]);

  const handlerRedirect = React.useCallback(() => {
    setIsOpen(false);
    window.open(`https://api.whatsapp.com/send?phone=${phoneWpp}&text=${messageWpp}`, '_blank');
  }, [phoneWpp, messageWpp]);

  const handlerOpenBlipChat = React.useCallback(() => {
    setIsOpen(false);
    document.querySelector<HTMLDivElement>('#blip-chat-open-iframe')?.click();
  }, []);

  const buttonClasses = {
    [styles['button-hidden']]: !isOpen,
  };

  return (
    <Flex
      padding={{ base: 'none' }}
      gap={{ base: 'xsm' }}
      direction="column"
      className={styles['chat-wpp']}
    >
      <button
        type="button"
        style={{ backgroundColor: '#398641' }}
        onClick={handlerRedirect}
        className={cn(styles['button-option'], buttonClasses)}
      >
        <WppIcon />
      </button>
      <button
        type="button"
        onClick={handlerOpenBlipChat}
        style={{ backgroundColor: `${colorChat}` }}
        className={cn(styles['button-option'], buttonClasses)}
      >
        <ChatIcon />
      </button>
      <button
        type="button"
        style={{ backgroundColor: isOpen ? '#fff' : `${colorChat}` }}
        onClick={() => setIsOpen(!isOpen)}
        className={styles['button-option']}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </Flex>
  );
}

export { ChatWhatsapp };
export type { Props as ChatWhatsappProps };
