import type { Ref as ReactRef } from 'react';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';

import type { ChatInitReturn } from '../../../utils';
import { useBreakpointContext } from '../../breakpoint';
import { Flex } from '../../flex';
import { IconButton } from '../../icon-button';
import { Text } from '../../text';

import type { SiteFooterProps, SiteFooterRef } from './site-footer';
import { SiteFooter } from './site-footer';
import {
  SiteFooterInfo,
  SiteFooterInfoAction,
  SiteFooterInfoText,
  SiteFooterInfoTitle,
} from './site-footer-info';
import {
  SiteFooterLabelValue,
  SiteFooterLabelValueHelper,
  SiteFooterLabelValueLabel,
  SiteFooterLabelValueValue,
} from './site-footer-label-value';
import { SiteFooterLink } from './site-footer-link';
import { SiteFooterNav, SiteFooterNavItem, SiteFooterNavSubItem } from './site-footer-nav';
import { SiteFooterSection } from './site-footer-section';
import { SiteFooterStores } from './site-footer-stores';

type Ref = SiteFooterRef;

type Props = SiteFooterProps;

function SiteFooterStatic(props: Props, ref: ReactRef<Ref>) {
  const chatRef = useRef<ChatInitReturn>();
  const { current: breakpoint } = useBreakpointContext();

  const openChat = useCallback(async () => {
    // document.querySelector('#blip-chat-open-iframe').open();
  }, []);

  const socials = (
    <SiteFooterInfo>
      <SiteFooterInfoTitle>Siga-nos</SiteFooterInfoTitle>
      <Flex gap="sm">
        <IconButton
          rel="noreferrer"
          size="2xlg"
          href="https://facebook.com/facedoagi"
          icon="facebook"
          color="primary-200"
          target="_blank"
          aria-label="Facebook"
        />
        <IconButton
          rel="noreferrer"
          size="2xlg"
          href="https://www.instagram.com/agibank/"
          icon="instagram"
          color="primary-200"
          target="_blank"
          aria-label="Instagram"
        />
        <IconButton
          rel="noreferrer"
          size="2xlg"
          href="https://linkedin.com/company/agibank/"
          icon="linkedin"
          color="primary-200"
          target="_blank"
          aria-label="Linkedin"
        />
        <IconButton
          rel="noreferrer"
          size="2xlg"
          href="https://www.youtube.com/canaldoagi"
          icon="youtube"
          color="primary-200"
          target="_blank"
          aria-label="Youtube"
        />
        <IconButton
          rel="noreferrer"
          size="2xlg"
          href="https://open.spotify.com/user/p367m1x95xrhfi0rb4s2k05ug/"
          icon="spotify"
          color="primary-200"
          target="_blank"
          aria-label="Spotify"
        />
        <IconButton
          rel="noreferrer"
          size="2xlg"
          href="https://twitter.com/agibank"
          icon="twitter"
          color="primary-200"
          target="_blank"
          aria-label="Twitter"
        />
      </Flex>
    </SiteFooterInfo>
  );

  const stores = <SiteFooterStores />;

  useEffect(() => () => chatRef.current ? chatRef.current.destroy() : undefined, []);

  return (
    <SiteFooter ref={ref} {...props}>
      <SiteFooterSection>
        <Flex direction="column" gap={{ base: 'xlg', md: '6xlg' }}>
          <Flex direction={{ base: 'column', md: 'row' }} gap="md">
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 'md', md: 'none' }}>
              <SiteFooterInfo>
                <SiteFooterInfoTitle>Central de relacionamento</SiteFooterInfoTitle>
                <Flex direction="column" gap="lg">
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>Capitais</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:30042221">
                      3004 2221
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>
                      Seg a Sábado: 07h30 às 20h
                    </SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>Demais localidades</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:08006020022">
                      0800 602 0022
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>
                      Seg a Sábado: 07h30 às 20h
                    </SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>SAC</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:08007300999">
                      0800 730 0999
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>24 horas</SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                </Flex>
              </SiteFooterInfo>
              <SiteFooterInfo>
                <SiteFooterInfoTitle>Central de vendas</SiteFooterInfoTitle>
                <Flex direction="column" gap="lg">
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>Capitais</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:30040900">
                      3004 0900
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>Seg a sex: 08h às 21h</SiteFooterLabelValueHelper>
                    <SiteFooterLabelValueHelper>Sábados: 08h às 16h</SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>Demais localidades</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:08007240900">
                      0800 724 0900
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>Seg a sex: 08h às 21h</SiteFooterLabelValueHelper>
                    <SiteFooterLabelValueHelper>Sábados: 08h às 16h</SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                </Flex>
              </SiteFooterInfo>
            </Flex>
            <Flex gap="2xlg" direction="column">
              <Flex gap={{ md: 'lg' }} direction={{ base: 'column', md: 'row' }}>
                <SiteFooterInfo>
                  <SiteFooterInfoTitle>Fale pelo chat</SiteFooterInfoTitle>
                  <SiteFooterInfoText>Te respondemos aqui mesmo.</SiteFooterInfoText>
                  <SiteFooterInfoAction onPress={openChat}>Falar no chat</SiteFooterInfoAction>
                </SiteFooterInfo>
                <SiteFooterInfo>
                  <SiteFooterInfoTitle>
                    Negocie {breakpoint !== 'base' ? <br /> : null} aqui
                  </SiteFooterInfoTitle>
                  <SiteFooterInfoText>Acesse nosso portal de negociação.</SiteFooterInfoText>
                  <SiteFooterInfoAction
                    rel="noreferrer"
                    href="https://negociacao.agibank.com.br/"
                    target="_blank"
                  >
                    Negociar
                  </SiteFooterInfoAction>
                </SiteFooterInfo>
              </Flex>
              {breakpoint !== 'base' ? socials : null}
            </Flex>
          </Flex>
          <SiteFooterNav aria-label="Links úteis">
            <SiteFooterNavItem title="Institucional">
              <SiteFooterNavSubItem href="https://agi.com.br/agibank">
                Quem somos
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/sobre/gestao-de-riscos">
                Governança corporativa
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="mailto:imprensa@agibank.com.br">
                Assessoria de imprensa
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem
                rel="noreferrer"
                href="https://carreiras.agibank.com.br/"
                target="_blank"
              >
                Trabalhe com a gente
              </SiteFooterNavSubItem>
            </SiteFooterNavItem>
            <SiteFooterNavItem title="Serviços">
              <SiteFooterNavSubItem href="https://contrate.agi.com.br/conta-corrente">
                Conta corrente
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/cartoes">
                Cartão débito e crédito
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/investimentos">
                Investimentos
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/emprestimo">
                Empréstimos
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://compras.agi.com.br/">
                Agi Compras
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/seguros">Seguros</SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/beneficio-inss">
                Benefício INSS
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/pix">Pix</SiteFooterNavSubItem>
            </SiteFooterNavItem>
            <SiteFooterNavItem title="Blog">
              <SiteFooterNavSubItem
                rel="noreferrer"
                href="https://blogdoagi.com.br/"
                target="_blank"
              >
                Notícias
              </SiteFooterNavSubItem>
            </SiteFooterNavItem>
            <SiteFooterNavItem title="Central de ajuda">
              <SiteFooterNavSubItem href="https://agi.com.br/faq">
                Perguntas frequentes
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://contatoseguro.com.br/agi">
                Denúncia de irregularidade
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://cadastro.agi.com.br/contact">
                Ouvidoria
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem
                rel="noreferrer"
                href="https://s3.amazonaws.com/prd-beanstalk/site/upload/Agibank_Correspondentes.pdf"
                target="_blank"
              >
                Portal do correspondente
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://www.agibank.com.br/onde-encontrar">
                Nossas lojas
              </SiteFooterNavSubItem>
            </SiteFooterNavItem>
          </SiteFooterNav>
          {breakpoint === 'base' ? socials : null}
        </Flex>
      </SiteFooterSection>
      <SiteFooterSection>
        <Flex direction={{ base: 'column', md: 'row' }} gap="2xlg" justifyContent="space-between">
          <Flex direction="column" gap="lg">
            {breakpoint === 'base' ? stores : null}

            <Flex
              gap={{ base: 'md', md: 'sm', lg: '3xlg' }}
              direction={{ base: 'column', md: 'row' }}
              justifyContent={{ base: undefined, md: 'space-between' }}
            >
              <SiteFooterLink href="https://agi.com.br/termos-de-uso">Legal</SiteFooterLink>
              <SiteFooterLink href="https://agibank.com.br/dicas-de-seguranca">
                Dicas de segurança
              </SiteFooterLink>
              <SiteFooterLink href="https://agi.com.br/politica-de-privacidade">
                Privacidade e seus dados
              </SiteFooterLink>
              <SiteFooterLink href="https://cadastro.agi.com.br/contact">Ouvidoria</SiteFooterLink>
            </Flex>

            <Text size="sm" color="support-400">
              Agi - All rights reserved. <br />
              CNPJ: 10.664.513/0001-50 | Banco Agibank S.A
              <br />
              Rua Sergio Fernandes Borges Soares, 1000
              <br />
              Prédio E1 - Distrito Industrial, Campinas - SP, 13054-709
            </Text>
          </Flex>
          {breakpoint !== 'base' ? stores : null}
        </Flex>
      </SiteFooterSection>
    </SiteFooter>
  );
}

const ForwardedSiteFooterStatic = forwardRef(SiteFooterStatic);
ForwardedSiteFooterStatic.displayName = 'SiteFooterStatic';

export { ForwardedSiteFooterStatic as SiteFooter };
export type { Props as SiteFooterProps, Ref as SiteFooterRef };
