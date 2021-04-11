<!-- Repo Title -->
# Vanilla JS
<!-- -->

<!-- Badges -->
<p align="center">
    <img src="https://img.shields.io/badge/made%20with-JavaScript-yellow.svg?style=flat&logo=JavaScript" alt="JS Badge">
</p>
<!-- -->

<!-- Logo -->
<p align="center">
    <img align="center" src="https://img.icons8.com/color/420/javascript.png" alt="JS Logo" width="300">
</p>
<!-- -->

<!-- Welcome Message -->
<p align="center">Bem-vindo ao meu repositório de <strong>JavaScript</strong>!</p>
<!-- -->

<!-- External Links -->
<p align="center">
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><strong>Documentação da linguagem »</strong></a>
    <br/>
    <a href="https://pt.wikipedia.org/wiki/JavaScript" target="_blank"><strong>Página no Wikipedia »</strong></a>
    <br/>
    <a href="https://www.javascript.com/" target="_blank"><strong>Site Oficial »</strong></a>
    <br/>
</p>
<!-- -->

<!-- Repo Links -->
<p align="center">
    <a href="Exercícios Resolvidos">Exercícios Resolvidos</a>
    ·
    <a href="Programas">Programas</a>
    ·
    <a href="Projetos React Native">Projetos React Native</a>
</p>
<!-- -->

<!-- Language Preview-->
<p align="center">
    <img align="center" src="https://css-tricks.com/wp-content/uploads/2016/06/eval-arbitrary-js-code-s.h..png" alt="JS Code" width="400">
</p>
<!-- -->

---

<!-- Table of Contents -->
## Table of Contents

- [Vanilla JS](#vanilla-js)
  - [Table of Contents](#table-of-contents)
  - [Objetivos](#objetivos)
  - [Recursos Utilizados](#recursos-utilizados)
    - [Sistema Operacional](#sistema-operacional)
    - [Interpretador](#interpretador)
    - [IDE](#ide)
  - [Programando em JavaScript](#programando-em-javascript)
    - [Pré-Requisitos](#pré-requisitos)
    - [Executando .js pelo CMD](#executando-js-pelo-cmd)
    - [Executando .js no VSCode](#executando-js-no-vscode)
    - [Exemplo de Hello World](#exemplo-de-hello-world)
  - [Studying JavaScript / ECMAScript](#studying-javascript--ecmascript)
    - [Tipos de dados no JavaScript](#tipos-de-dados-no-javascript)
    - [var e let](#var-e-let)
  - [Links Úteis](#links-úteis)
  - [Autor](#autor)
  - [Licença](#licença)
<!-- -->

<!-- Objetivo -->
## Objetivos

Este repositório foi criado com a finalidade de aprender e colocar em prática meus estudos da Linguagem **JavaScript** e todos os assuntos relacionados à mesma.
<!-- -->
**EN:** This repository was created with the purpose of learning and putting into practice my studies of the <strong>JavaScript</strong> language and all subjects related to it.

<!-- Material Utilizado -->
## Recursos Utilizados

Recursos utilizados durante a aprendizagem.

**EN:** Resources used during learning.

### Sistema Operacional

- [Windows 10](https://www.microsoft.com/pt-br/windows/)
- [Kubuntu 18.04.5](https://kubuntu.org/getkubuntu/)

### Interpretador

- [Node.js](#Links-%C3%9Ateis)

### IDE

- [Visual Studio Code](https://code.visualstudio.com/)
  - Extensões:
    [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
<!-- -->

<!-- Programando em ... -->
## Programando em JavaScript

O que foi necessário para criar e rodar meus programas em JavaScript

### Pré-Requisitos

Para criar programas em **JS** e executá-los no cmd é necessário ter o intepretador *Node.js* instalado no computador.

- Para verificar se o Node está instalado no PC, basta executar o comando no CMD: <br/>
    `> node -v`

> - Se o comando não for reconhecido, **não está** instalado! *(ver [Links Úteis](#Links-%C3%9Ateis) para instalar o Haskell e suas dependências)* <br/>
> - Caso exiba a versão do node, **está** instalado! <br/>

### Executando .js pelo CMD

Criando e executando um programa simples em JS pelo CMD

1. Para executar arquivos *.js* pelo terminal deve-se ter o interpretador *"Node.js"* devidamente configurado no PC. <br/>
   Para isso, baixar e executar o pacote de instalação do Node.js. *(ver [Links Úteis](#Links-%C3%9Ateis))*

2. Após ter baixado e executado o instalador do Node, já será capaz de criar e executar programas JavaScript no CMD do Windows.

- Para iniciar um ambiente virtual de desenvolvimento e criar programas rápidos pelo CMD, é só executar o comando: <br/>
    `> node` <br/>
    Então é só digitar os códigos. <br/>

    Exemplo: <br/>
    `>console.log("Hello Gui! =)")` <br/>
    `>Hello Gui! =)` <br/>
    `undefined`

- Para executar programas *".js"* no terminal/cmd:
  - Abrir pasta onde se localiza o arquivo *.js*: <br/>
     `> cd "pasta do programa"`
  - Compilar e executar o programa: <br/>
     `> node "nome do arquivo".js`
  
  - Exemplo: <br/>
     `> cd "C:\Users\Guilherme\Documentos\Meus Programas\JavaScript\Programa Hello World" // Para ir até a pasta do arquivo .js` <br/>
     `> node HelloWorld.js // Para compilar e executar programa chamado "HelloWorld.js"`

### Executando .js no VSCode

1. Baixar extensão [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
2. **CTRL + ALT + N** para executar o *"arquivo"*.js

### Exemplo de Hello World

``` JavaScript
console.log("Hello, Gui! =)")
```

Saída: <br/>
`> Hello Gui! =)`
<!-- -->

---

## Studying JavaScript / ECMAScript

### Tipos de dados no JavaScript

- **Tipos de dados Primitivos**:
  - **String** (Sequência de caracteres - texto);
  - **Number** (Números inteiros ou ponto flutuante);
  - **Boolean** (Valor lógico VERDADEIRO/FALSE - true/false);
  - **Undefined** (Contém apenas o valor Undefined - Indica variável não inicializada);
  - **Null** (Contém o valor null - Indica ausência de valor em uma variável)
- **Tipos de dados Complexos (Tipos de referência)**:
  - **Object** (Conjunto de dados agrupados representados por pares de chave e valor, contém propriedades e métodos)
  - **Array** (Tipo especial para armazenamento de dados ordenados sequencialmente numerados via index)
  - **Function** (Tipo especial que tem código que pode ser executado)
  - **Date** (Tipo especial para trabalhar com datas e minutos)
  - **RegExp** (Tipo especial para trabalhar com expressão regular)
  - **Error** (Tipo especial para manipular e apresentar erros em tempo de execução)

### var e let

- Variáveis definidas com **var** tem escopo global e escopo de função;
- Variáveis definidas com **let** tem escopo global, escopo de função e escopo de bloco.

<!-- Links-->
## Links Úteis

- [Node.js](https://nodejs.org/en/)
- [React Native](https://facebook.github.io/react-native/)
- [JSFiddle](https://jsfiddle.net/)
<!-- -->

<!-- Autor/Contato -->
## Autor

- **Guilherme Esdras (guilherme.esdras@outlook.com)** - [GitHub Page](https://github.com/GuilhermeEsdras)
<!-- -->

<!-- Licença -->
## Licença

*Distributed under the MIT License. See LICENSE for more information.*
