# React - Introdução - 26/05/2022

- React é uma biblioteca usada para a construção de interfaces.
- Desenvolvimento de aplicações do lado do cliente.
- Capacidade semelhantes e é comparado com os frameworks Angule e Vue.

## Single Page Application(SPA)

- Uma aplicação web ou um site de uma única página.
- Reescrevendo dinamicamente a página atual com o novo dado solicitado.
- Recarrega apenas parte da interface.
- Consultas no servidor só são necessárias para buscas novos dados e não 
páginas inteiras.
- Transições entre páginas mais rápidas

## Múltiplas páginas (MPA)

- Página inteira no servidor.
- Recarrega a nova página completa a cada atualização necessária.

## JSX

- Extensão da sintaxe do JavaScript.
- Parecido com linguagem de marcação.
- Chamamos de elementos React.

```react
const mensagem = <h1>Hello, world!</h1>;
```

- Não é uma string
- Uma instrução em JSX que armazena na variável mensagem o elemento React.
- Podemos mesclar com expressões do JavaScript.

```react
const nome = 'Irmão do Jorel';
const mensagem = <h1>Olá, {nome}</h1>;
```

- Incorporar a expressão JavaScript é necessário que você a insira entre chaves.

```react
function formataNome(user) {
    return user.firstName + ' ' + user.lastName;
}

const mensagem = <h1>Hello, {formataNome(user)}!</h1>;
```

## Propriedades React

- Pode usar atributos nos elementos React.
- DOM usa a convenção camelCase de nomenclatura de propriedade.

## Elementos React

- O elemento React pode ter apenas um elemento React pai.

Sintaxe válida: 

```react
const mensagem = (
<div>
    <h1>Olá!</h1>
    <h2>Como é bom ver vocês.</h2>
</div>
);
```

- Permite criar uma marcação vazia como pai de várias marcações 
filhas. ex: <> elementos <>

## Renderização de elementos React

- Descreve o que você visualiza na interface que está sendo 
desenvolvida.
- São objetos simples.
- Menos recursos para serem criados e gerenciados. 

### DOM Virtual

- Formando pelos elementos React.
- Responsável por atualizar o DOM do navegador (Dom real).

Renderizar algo: transformar uma sintaxe do JSX em algo que
vai ser exibido na página web.

## Root

```react 
<div id="root"></div>
```

- Essa marcação é chamada de nó raiz do DOM, pois toda a aplicação 
React será renderizada e gerenciada dentre dessa marcação.
- Render(): responsável por descrever como a interface do usuário 
deverá ser apresentada no navegador web.

```react
const mensagem = <h1>Hello, world</h1>;
ReactDOM.render(mensagem, document.getElementById('root'));
```

## Componentes

- Pode ser implementado como uma classe ou como uma função do JavaScript.
- Podem ser formados por um ou mais elementos React. 
- Construindo vários componentes independentes, isolados e reutilizáveis.
- Usados para compor uma interface do usuário complexa.
- Aplicação React é essencialmente uma árvore de componentes.

```react
- Função:

function Mensagem() {
    return <h1>Olá, pessoal!</h1>;
}

- Classe: 

class Mensagem extends React.Component {
    render() {
        return <h1>Olá, pessoal!</h1>;
    }
}
```