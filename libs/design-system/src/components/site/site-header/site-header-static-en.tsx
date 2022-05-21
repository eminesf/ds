import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';

import { SiteHeader, SiteHeaderProps, SiteHeaderRef } from './site-header';
import { SiteHeaderAction } from './site-header-action';
import { SiteHeaderActionsWrapper } from './site-header-actions-wrapper';
import { SiteHeaderItem } from './site-header-item';
import { SiteHeaderSubItem } from './site-header-subitem';

type Ref = SiteHeaderRef;

type Props = SiteHeaderProps;

function SiteHeaderStaticEnglish(props: Props, ref: ReactRef<Ref>) {
  return (
    <SiteHeader ref={ref} {...props}>
      <SiteHeaderItem
        title="Agi"
        description="Our purpose is to make your daily life better. We believe that innovating is much more than doing what no one else has done. It's thinking with simplicity, looking at you and creating solutions and experiences that change your life. Therefore, we are at your side for whatever comes and goes. To save on bills, to have more peace of mind at the end of the month, to take off your business or to make your dreams come true: always count on us."
      >
        <SiteHeaderSubItem href="https://agi.com.br/agibank">About us</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/agibank">The Agi way</SiteHeaderSubItem>
        <SiteHeaderSubItem
          rel="noreferrer"
          href="https://carreiras.agibank.com.br/"
          target="_blank"
        >
          Work with us
        </SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://www.agi.com.br/imprensa">Press</SiteHeaderSubItem>
      </SiteHeaderItem>
      <SiteHeaderItem
        title="For you"
        description="Every second of your time deserves to be valued. That's why we work to deliver the best experience and the right products to transform your life. We are complete. We are online and in over 800 stores throughout Brazil. Here you will find everything you need in one place, from a digital checking account to face-to-face service with that freshly made coffee, from cashback to investment that can change your future."
      >
        <SiteHeaderSubItem href="https://contrate.agi.com.br/conta-corrente">
          Checking account
        </SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/cartoes">
          Debit and credit cards
        </SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/investimentos">Investments</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/emprestimo">Loans</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://compras.agi.com.br/">Agi Compras</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/seguros">Insurance</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/beneficio-inss">
          INSS Pension Benefits
        </SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/pix">Pix</SiteHeaderSubItem>
        {/* <SiteHeaderSubItem
          target="_blank"
          href="https://prd-agibank-canais.s3.sa-east-1.amazonaws.com/web_public/site/limites-transacionais-agi.pdf"
        >
          Transactional Limits
        </SiteHeaderSubItem> */}
        <SiteHeaderSubItem
          target="_blank"
          href="https://prd-agibank-canais.s3.sa-east-1.amazonaws.com/web_public/site/tabela-tarifas.pdf"
        >
          Fare table
        </SiteHeaderSubItem>
      </SiteHeaderItem>
      <SiteHeaderItem
        rel="noreferrer"
        href="https://blogdoagi.com.br/en"
        title="Blog"
        target="_blank"
      />
      <SiteHeaderItem
        rel="noreferrer"
        href="https://ri.agibank.com.br"
        title="RI Portal"
        target="_blank"
      />
      <SiteHeaderItem href="https://www.agibank.com.br/onde-encontrar" title="Find us" />
      <SiteHeaderActionsWrapper>
        <SiteHeaderItem
          aria-label="Acessar home em Português | Go to Portuguese homepage"
          title="PT"
          href="https://agi.com.br/"
        />
        <SiteHeaderAction href="https://cadastro.agi.com.br/login">Login</SiteHeaderAction>
      </SiteHeaderActionsWrapper>
    </SiteHeader>
  );
}

const ForwardedSiteHeaderStatic = forwardRef(SiteHeaderStaticEnglish);
ForwardedSiteHeaderStatic.displayName = 'SiteHeaderStaticEnglish';

export { ForwardedSiteHeaderStatic as SiteHeaderEnglish };
export type { Props as SiteHeaderEnglishProps, Ref as SiteHeaderEnglishRef };
