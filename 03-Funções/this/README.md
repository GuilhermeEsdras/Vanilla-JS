# Contexto do `this`

O operador `this` é frequentemente utilizado no javascript para se referir a um contexto de execução, no qual neste contexto pode ser definido variáveis, objetos ou funções;
Esta atribuição de referência do this a um contexto execução é o que chamamos de ThisBinding.

Entenda contexto de execução como sendo um espaço de memória próprio que encapsulada um escopo, podendo armazenar objetos, variáveis e funções, sendo o this é a palavra reservada que referencia este escopo permitindo acessar os objetos, ex.: `this.nomeObjeto`.

Quando acessamos uma nova aba em um navegador o JavaScript cria um novo contexto de execução para a janela, sendo a janela definida através do objeto 'window' que é o próprio 'this' para este contexto de execução global.

A definição do this dentro de uma função irá variar de acordo como a função foi definida e como e onde ela é chamada, exemplo:

- Se definida e chamada em escopo global o this irá referenciar o objeto window;
- Se for definida como um método dentro de um objeto irá referenciar a instância do objeto;
- Se chamada como callback irá ter this como referencia ao objeto pai no qual foi definida e não sendo this o contexto no qual foi invocada;
- Se chamada a partir de um evento como click de um elemento html, o this assumirá o próprio elemento html, neste caso não irá referenciar o local onde foi definida.

Para driblar este comportamente é usado uma variável that ou self para armazenar o this do contexto atual da invocação, podendo também usar uma rrow function ou os métodos bind, call e apply para definir o contexto do this;
