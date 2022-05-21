# Agi Monorepo

Repositório responsável por armazenar aplicações e bibliotecas do Agi.

## Requisitos

Para rodar o projeto é necessário ter instalado o [Rush](https://rushjs.io/) globalmente, para isso, basta rodar `npm install -g @microsoft/rush`.

## Começando

Para fazer o bootstrap inicial basta rodar `rush install`. Se você quiser uma documentação mais aprofundada sobre o Rush, acesse o [Getting started as a developer](https://rushjs.io/pages/developer/new_developer/) ou a seção [Comandos](#comandos).

## Comandos

- `rush test`: executa todos os testes das aplicações e bibliotecas
- `rush pack`: constrói o arquivo de publicação
- `rush build`: constrói todas aplicações e bibliotecas mapeados no `rush.json`
- `rush clean`: limpa os arquivos de build das aplicações e bibliotecas
- `rush purge`: limpa os arquivos temporarios do Rush
- `rush update`: atualiza os pacotes e symlinks
- `rush rebuild`: reconstrói todas aplicações e bibliotecas mapeados no `rush.json`
- `rushx ${NOME_DO_SCRIPT}`: executa um comando do projeto em que ele é executado
- `rush add --package ${NOME_DO_PACOTE} --caret`: adiciona um pacote ao projeto em que ele é executado

## Merge Request

Antes de desenvolver uma tarefa, deve-se criar uma `branch` contendo um nome descritivo a respeito da tarefa, exemplo: `feat/accordion`. Os commits feitos nessa branch devem seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/).

Após terminar a tarefa, deve-se fazer um `merge request` da branch criada para a `main` (o projeto só possui 1 branch, a main). Ao criar o `merge request` deve-se selecionar o template `default` na opção `Description` pela interface do Gitlab, copiar o nome da branch criada e colar no lugar de `{NOME_DA_BRANCH}`.

Para mergear deve-se ter pelo menos `2 joinhas`, a `Pipeline` deve ter sido `concluída com sucesso` e o review no `Chromatic` tambem deve ter sido `aprovado`.

Lembre-se: o link do Chromatic só passa a funcionar após a Pipeline ter concluído com sucesso, se outro commit for feito para branch, deve-se esperar a Pipeline terminar novamente para validar as mudanças no Chromatic.

## Publicação

Para publicar uma nova versão, deve-se alterar o `package.json` do projeto desejado seguindo o [SEMVER](https://semver.org/lang/pt-BR/), caso tenha alguma breaking change e essa breaking change não tenha sido posta no arquivo `MIGRATION.md` fazer isso agora, criar um commit seguindo o padrão: `chore: publica versão {NUMERO_DA_VERSÃO} do {NOME_DA_LIB}`, criar um Merge Request como indicado acima e após mergear, rodar o comando `rush rebuild` (para rebuildar todos os projetos e suas dependêndencias), entrar na pasta do projeto que deseja publicar e rodar `pnpm publish`, não se esqueça de estar autenticado no registry do Agibank antes de publicar.

## Dicas

- Caso você esteja tendo problemas com a instalação do projeto, você pode executar `rush wipe` para limpar o monorepo por completo e fazer o bootstrap novamente.
- Caso a Pipeline no Gitlab CI falhe, tente verificar o que houve e caso o erro for nos testes da `Modal`, rode novamente. Obs: o teste da Modal eventualmente quebra, não paramos para olhar o motivo, caso você tenha tempo e disposição, corrija!