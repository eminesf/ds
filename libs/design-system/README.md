# Design System

Biblioteca com componentes do Design System para React do Agi.

## Como usar

Caso o objetivo seja utilizar em um projeto ou biblioteca dentro desse monorepo, utilize o comando `rush add --package @agi/design-system`, caso não seja esse o objetivo, você pode utilizar o gerenciador de sua preferência instalando o pacote `@agi/design-system`.

Para utilizar os componentes da biblioteca, basta seguir o exemplo abaixo:

```typescript
import { NomeDoComponente } from '@agi/design-system';
```

A aplicação que for utilizar, deve rodar dentro do componente `Provider` ele prove varias funcionalidades para os componentes da biblioteca:

```typescript
import { Provider } from '@agi/design-system';

function App() {
  return (
    <Provider>
      // sua aplicação deve rodar aqui
    </Provider>
  );
}
```

Tambem deve-se importar os estilos via css:

```css
@import "@agi/design-system";
```

> Lembre-se o projeto espera que a aplicação que for utiliza-lo já possua a biblioteca `@agi/design-tokens` importada via css.

## Criando um componente

Para criar um componente basta criar uma pasta com seu nome dentro de [./src/components](./src/components) e exporta-lo no [./src/index.ts](./src/index.ts).

## Comandos

- `rushx test`: executa os testes
- `rushx watch`: constrói a biblioteca em modo watch
- `rushx build`: constrói a biblioteca
- `rushx storybook`: inicia o storybook

## Dicas

Caso esteja utilizando essa biblioteca dentro de uma aplicação ou biblioteca gerenciada por esse monorepo e queira desenvolver em ambos projetos simultaneamente, basta executar o comando `rushx watch` aqui e inciar a aplicação dependente. Dessa forma, qualquer alteração nesse projeto será refletida automaticamente na aplicação ou biblioteca em que ela esteja sendo utilizada.
