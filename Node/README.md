# npm - Node Package Manager

Alguns comandos, conceitos e definições importantes que vale a pena deixar por aqui.

## Iniciar projeto npm / criar arquivo `package.json` no diretório atual

`npm init`

Ou, para aceitar/pular todas as "perguntas" no ato da criação:
`npm init -y`

## Instalar módulos node

`npm i --save "nome do modulo"`

Onde:
- `i` ou `install`: flag que indica a instalação de um módulo
- `save`: cria dependência no arquivo `package.json`

## Instalando módulo em uma versão específica

`npm i --save-dev "nome do modulo"@1.23.4 -E`

Onde:
- `--save-dev`: significa que é uma dependência apenas de produção / teste. 
  Irá criar uma *chave* "devDependecies" em `package.json` e colocar esa versão específica do módulo lá.
- `@1.23.4`: versão do módulo desejada.
- `-E`: flag para *"exata" (Exactly)* significando que você quer exatamente essa versão.

## Arquivos

- `package.json`: ficam todas as informações e versões do projeto.
- `package-lock.json`: é importante, deve ser enviada no git, pois ficam as informações dos pacotes/módulos e suas versões exatas que devem ser baixadas ao instalar o projeto em um local sem os dados da pasta `node_modules`.
  
## Modificações úteis no arquivo `package.json`

- `"main"`: é o arquivo principal do projeto.
- `"scripts"`: "palavras chave" que quando usadas no terminal, invocam algum comando pré-definido/especificado nesta seção.
  Scripts padrões do nodem são chamados usando: `npm start`
  Exemplo:
  - "start": "nodemon"
    ação: Executa o comando `nodemon` que procurará pelo arquivo definido em "main" e o executará.

  Scripts personalizados devem ser chamados usando `npm run "nome do script"`

## Instalando todas as dependências (pasta `node_modules`) de um determinado projeto baixado

`npm i`

## Alguns conceitos e definições

### Frameworks & Bibliotecas

Basicamente, uma Biblioteca é um conjunto de funcionalidades e recursos que podem ser utilizados em uma aplicação à partir da importação do módulo referente a tal biblioteca, para dar uma maior gama de possibilidades e facilitar no desenvolvimento desta aplicação.

#### Alguns Exemplos de Bibliotecas JS

- Axios
- Gulp.js
- jQuery
- Lodash

Já um Framework, que pode ser traduzido como "arcabouço", é utilizado como base ou estrutura de um projeto/aplicação, e que pode ser utilizado para construir e organizar o projeto inteiro, seguindo toda a estruturação, configurações e preceitos que este Framework estabelece.

#### Alguns Exemplos de Frameworks JS

<p align="center">
  <b>Voltadas para Backend</b>
</p>

| [Express.js](https://expressjs.com/) | [Koa.js](https://koajs.com/) | [Meteor](https://www.meteor.com/) | [Sails.js](https://sailsjs.com/) |
| :----------: | :------: | :------: | :--------: |
| <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" width="200" /> | <img src="https://seeklogo.com/images/K/koa-logo-D494764315-seeklogo.com.png" width="100" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Meteor-logo.png" width="200" /> | <img src="https://sailsjs.com/images/logos/sails-logo_ltBg_ltBlue.png" width="200" /> |
| `$ npm install express` | `$ npm install express` | `$ npm install meteor` | `$ npm install sails` |

<p align="center">
  <b>Voltadas para Frontend</b>
</p>

| [Angular](https://angular.io/) | [Next.js](https://nextjs.org/) | [React](https://reactjs.org/) | [Vue.js](https://vuejs.org/) |
| :----------: | :------: | :------: | :--------: |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png" width="200" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" width="100" /> | <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react-logo.png" width="200" /> | <img src="https://3lhowb48prep40031529g5yj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/logo-vuejs-min.png" width="170" /> |
| `$ npm install -g @angular/cli` | [`clique`](https://nextjs.org/learn/basics/create-nextjs-app/setup) | `$ npx create-react-app my-app` | `$ npm install vue` |

**Voltadas para Frontend**
- Angular
- Next.js
- React JS
- Vue.js
  