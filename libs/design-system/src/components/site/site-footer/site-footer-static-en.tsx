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
      <SiteFooterInfoTitle>Follow us</SiteFooterInfoTitle>
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
          href="https://www.instagram.com/agibank"
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

  const stores = <SiteFooterStores title="Download the app" />;

  useEffect(() => () => chatRef.current ? chatRef.current.destroy() : undefined, []);

  return (
    <SiteFooter ref={ref} {...props}>
      <SiteFooterSection>
        <Flex direction="column" gap={{ base: 'xlg', md: '6xlg' }}>
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ md: '3xlg', lg: '6xlg' }}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap="md"
              justifyContent="space-between"
              grow
            >
              <SiteFooterInfo>
                <SiteFooterInfoTitle>
                  Customer <br /> Service
                </SiteFooterInfoTitle>
                <Flex direction="column" gap="lg">
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>State Capitals</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:30042221">
                      3004 2221
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>
                      Mon-Fri: 8 a.m. to 9 p.m.
                    </SiteFooterLabelValueHelper>
                    <SiteFooterLabelValueHelper>Sat: 9 a.m. to 6 p.m.</SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>Other Locations</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:08006020022">
                      0800 602 0022
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>
                      Mon-Fri: 8 a.m. to 9 p.m.
                    </SiteFooterLabelValueHelper>
                    <SiteFooterLabelValueHelper>Sat: 9 a.m. to 6 p.m.</SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>SAC</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:08007300999">
                      0800 730 0999
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>24/7</SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                </Flex>
              </SiteFooterInfo>
              <SiteFooterInfo>
                <SiteFooterInfoTitle>Sales</SiteFooterInfoTitle>
                <Flex direction="column" gap="lg">
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>State Capitals</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:30040900">
                      3004 0900
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>
                      Mon-Fri: 8 a.m to 9 p.m.
                    </SiteFooterLabelValueHelper>
                    <SiteFooterLabelValueHelper>Sat: 9 a.m. to 6 p.m.</SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                  <SiteFooterLabelValue>
                    <SiteFooterLabelValueLabel>Other locations</SiteFooterLabelValueLabel>
                    <SiteFooterLabelValueValue href="tel:08007240900">
                      0800 724 0900
                    </SiteFooterLabelValueValue>
                    <SiteFooterLabelValueHelper>
                      Mon-Fri: 8 a.m to 9 p.m.
                    </SiteFooterLabelValueHelper>
                    <SiteFooterLabelValueHelper>Sat: 9 a.m. to 6 p.m.</SiteFooterLabelValueHelper>
                  </SiteFooterLabelValue>
                </Flex>
              </SiteFooterInfo>
            </Flex>
            <Flex gap="2xlg" direction="column" grow>
              <Flex
                gap={{ md: 'lg' }}
                direction={{ base: 'column', md: 'row' }}
                justifyContent="space-between"
              >
                <SiteFooterInfo>
                  <SiteFooterInfoTitle>Chat with us</SiteFooterInfoTitle>
                  <SiteFooterInfoText>Just call and we&quot;ll pick up.</SiteFooterInfoText>
                  <SiteFooterInfoAction onPress={openChat}>Chat</SiteFooterInfoAction>
                </SiteFooterInfo>
                <SiteFooterInfo>
                  <SiteFooterInfoTitle>Negotiate here</SiteFooterInfoTitle>
                  <SiteFooterInfoText>Visit our negotiation portal.</SiteFooterInfoText>
                  <SiteFooterInfoAction
                    rel="noreferrer"
                    href="https://negociacao.agibank.com.br/"
                    target="_blank"
                  >
                    Negotiate
                  </SiteFooterInfoAction>
                </SiteFooterInfo>
              </Flex>
              {breakpoint !== 'base' ? socials : null}
            </Flex>
          </Flex>
          <SiteFooterNav aria-label="Links úteis">
            <SiteFooterNavItem title="Institutional">
              <SiteFooterNavSubItem href="https://agi.com.br/agibank">
                About us
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/sobre/gestao-de-riscos">
                Corporate governance
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="mailto:imprensa@agibank.com.br">
                Press
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem
                rel="noreferrer"
                href="https://carreiras.agibank.com.br/"
                target="_blank"
              >
                Work with us
              </SiteFooterNavSubItem>
            </SiteFooterNavItem>
            <SiteFooterNavItem title="Services">
              <SiteFooterNavSubItem href="https://contrate.agi.com.br/conta-corrente">
                Checking account
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/cartoes">
                Credit and debit cards
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/investimentos">
                Investments
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/emprestimo">
                Loans
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://compras.agi.com.br/">
                Agi Compras
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/seguros">
                Insurance
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/beneficio-inss">
                INSS Pension Benefits
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://agi.com.br/pix">Pix</SiteFooterNavSubItem>
            </SiteFooterNavItem>
            <SiteFooterNavItem title="Blog">
              <SiteFooterNavSubItem
                rel="noreferrer"
                href="https://blogdoagi.com.br/en"
                target="_blank"
              >
                News
              </SiteFooterNavSubItem>
            </SiteFooterNavItem>
            <SiteFooterNavItem title="Help">
              <SiteFooterNavSubItem href="https://agi.com.br/faq">FAQ</SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://contatoseguro.com.br/agi">
                Report irregularities
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://cadastro.agi.com.br/contact">
                Ombudsman
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem
                rel="noreferrer"
                href="https://s3.amazonaws.com/prd-beanstalk/site/upload/Agibank_Correspondentes.pdf"
                target="_blank"
              >
                Banking correspondents&quot;s portal
              </SiteFooterNavSubItem>
              <SiteFooterNavSubItem href="https://www.agibank.com.br/onde-encontrar">
                Agencies
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
                Security tips
              </SiteFooterLink>
              <SiteFooterLink href="https://agi.com.br/politica-de-privacidade">
                Privacy
              </SiteFooterLink>
              <SiteFooterLink href="https://cadastro.agi.com.br/contact">Ombudsman</SiteFooterLink>
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

export { ForwardedSiteFooterStatic as SiteFooterEnglish };
export type { Props as SiteFooterEnglishProps, Ref as SiteFooterEnglishRef };
