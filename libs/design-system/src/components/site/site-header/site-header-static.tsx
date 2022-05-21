import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';

import { SiteHeader, SiteHeaderProps, SiteHeaderRef } from './site-header';
import { SiteHeaderAction } from './site-header-action';
import { SiteHeaderActionsWrapper } from './site-header-actions-wrapper';
import { SiteHeaderItem } from './site-header-item';
import { SiteHeaderSubItem } from './site-header-subitem';

type Ref = SiteHeaderRef;

type Props = SiteHeaderProps;

function SiteHeaderStatic(props: Props, ref: ReactRef<Ref>) {
  return (
    <SiteHeader ref={ref} {...props}>
      <SiteHeaderItem
        title="O Agi"
        description="Nosso propósito é fazer o seu dia a dia melhor. Acreditamos que inovar é muito mais que fazer o que ninguém fez. É pensar com simplicidade, olhando pra você e criando soluções e experiências que mudem sua vida.  Por isso, estamos ao seu lado para o que der e vier. Para economizar nas contas, para ter mais tranquilidade no fim do mês, para decolar o seu negócio ou para realizar seus sonhos: conte com a gente sempre. "
      >
        <SiteHeaderSubItem href="https://agi.com.br/agibank">Quem somos</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/agibank">O jeito Agi</SiteHeaderSubItem>
        <SiteHeaderSubItem
          rel="noreferrer"
          href="https://carreiras.agibank.com.br/"
          target="_blank"
        >
          Trabalhe com a gente
        </SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://www.agi.com.br/imprensa">Imprensa</SiteHeaderSubItem>
      </SiteHeaderItem>
      <SiteHeaderItem
        title="Para você"
        description="Cada segundo do seu tempo merece ser valorizado. Por isso, trabalhamos para entregar a melhor experiência e os produtos certos para transformar a sua vida. Somos completos. Estamos on-line e em mais de 800 lojas espalhadas por todo o Brasil. Aqui você encontra tudo o que precisa em um único lugar, da conta corrente digital ao atendimento presencial com aquele cafezinho feito na hora, do cashback ao investimento que pode mudar o seu futuro. "
      >
        <SiteHeaderSubItem href="https://contrate.agi.com.br/conta-corrente">
          Conta corrente
        </SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/cartoes">
          Cartões débito e crédito
        </SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/investimentos">Investimentos</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/emprestimo">Empréstimos</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://compras.agi.com.br/">Agi Compras</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/seguros">Seguros</SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/beneficio-inss">
          Benefício INSS
        </SiteHeaderSubItem>
        <SiteHeaderSubItem href="https://agi.com.br/pix">Pix</SiteHeaderSubItem>
        {/* <SiteHeaderSubItem
          target="_blank"
          href="https://prd-agibank-canais.s3.sa-east-1.amazonaws.com/web_public/site/limites-transacionais-agi.pdf"
        >
          Limites Transacionais
        </SiteHeaderSubItem> */}
        <SiteHeaderSubItem
          target="_blank"
          href="https://prd-agibank-canais.s3.sa-east-1.amazonaws.com/web_public/site/tabela-tarifas.pdf"
        >
          Tabela de tarifas
        </SiteHeaderSubItem>
      </SiteHeaderItem>
      <SiteHeaderItem
        rel="noreferrer"
        href="https://blogdoagi.com.br"
        title="Blog"
        target="_blank"
      />
      <SiteHeaderItem
        rel="noreferrer"
        href="https://ri.agibank.com.br"
        title="Portal RI"
        target="_blank"
      />
      <SiteHeaderItem href="https://www.agibank.com.br/onde-encontrar" title="Nossas lojas" />

      <SiteHeaderActionsWrapper>
        <SiteHeaderItem
          aria-label="Go to English homepage | Acessar home em Inglês"
          title="EN"
          href="https://agi.com.br/en"
        />
        <SiteHeaderAction href="https://cadastro.agi.com.br/login">
          Acessar sua conta
        </SiteHeaderAction>
      </SiteHeaderActionsWrapper>
    </SiteHeader>
  );
}

const ForwardedSiteHeaderStatic = forwardRef(SiteHeaderStatic);
ForwardedSiteHeaderStatic.displayName = 'SiteHeaderStatic';

export { ForwardedSiteHeaderStatic as SiteHeader };
export type { Props as SiteHeaderProps, Ref as SiteHeaderRef };
