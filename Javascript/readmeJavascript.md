# Javascript 

# Introdução ao javascript - 26/04/2022

Temas para ser abordados:

- Conhecer a linguagem de programação JavaScript;
- Familiarizar-se com as extensões VsCode voltadas ao Javascript;
- Iniciar a compreensão da sintaxe da linguagem;
- Criar sua primeira página utilizando JavaScript.

## Sobre js

- O JS é uma linguagem de alto nível interpretada com tipagem dinâmica
fraca e mutiparadigma (protótipos, orientado a objeto, imperativo e, funcional).

- tecnologias bases da World Wild Web.

### Client e Server 

- Programação do lado do servidor (Back-End): Na programação do lado do servidor, 
o código executa em um servidor web.

- Lado do cliente (FrontEnd): os navegadores comunicam-se com web servers (JSON) 
utilizando requisições HTTP (HyperText Transfer Protocol).

#### Requisição e Resposta

- Na programação do lado do cliente, os programas são executados no
computador do usuário utilizando scripts, que são carregados juntos
com os arquivos HTML e CSS.

## JavaScript e DOM

- DOM (Document Object Model) permite o JavaScript acessar
e modificar todos os elementos HTML em uma página web.

- estrutura de elementos e a árvore de objetos dessa página.
- adicionar, alterar ou remover os elementos, os atributos e 
estilos CSS da página.

## Sintaxe do JS

### Espaços em branco

ocasionalmente é necessário usar o espaço em branco para separar sequências de 
caracteres que, de outra forma, seriam combinadas em um único token.

O espaço em branco entre a palavra reservada let e o nome da variável num é 
necessário e não deve ser removido, mas ou outros espaços em branco são opcionais.

### Palavras reservadas

Os nomes de variáveis e funções em JS podem conter letras, dígitos
ou underline e não podem utilizar as palavras reservadas.

### Números

- não há diferença entre 1 e 1.0, esses números são interpretados como
mesmo valor.

### Strings

- Strings são sequência de caracteres 
- devem ser envolvidas utilizando aspas simples ou aspas duplas, 
mesmo se elas contêm zero ou mais caracteres.

# Console, variáveis e operadores - 27/04/2022

Temas para ser abordados:

- Tipos de Dados.
- Operadores.
- Variáveis.
- Objeto do Console.

## Tipos de dados

- Dentro do mundo do computador, existem apenas dados.
- Você pode ler dados, modificar dados, criar dados.
- Todos esses dados são armazenados como longas sequências de bits.

### Numérico 

- Valores podem ser o tipo numérico, que representam valores
constantes. 

- representado como ponto flutuante de 64 bits

### String

- tipo de dado, que é usado para representar texto.

- aspas simples ou aspas duplas. "String"

### Booleano

- distingue apenas duas possibilidades.
- verdadeiro e falso 

### Null e undefined

- ausência de um valor significativo.

## Operadores

### Operações aritméticas

+ = Mais
- = Menos
/ = Divisão
* = Multiplicação
** = Exponenciação
% = Resto

### Precedência dos operadores

() = Primeiro
** = Segundo
*/ = Terceiro
+- = Quarto

### Relacionais

==, !=, >, <, >=, <= = Igual, diferente, maior que, menor que, maior ou diferente, menor ou diferente.

### Lógico

- &&, ||, ! = e, ou, não

# Objetos, Funções e Eventos - 02/05/2022

objetivos: 

- Funções
- Arrow Function
- Objetos
- Eventos

## Funções

- Funções são usadas em programação para executar
ações que são rotineiramente executadas em um programa.

- Usar CamelCase para funções pode ser o recomendado.

## Arrow function 

- Arrow Function foi introduzido em 2015 no ES6.
- Uma forma de fazer funções atualizado. 

## Object 

- Um objeto é uma coleção de dados e/ou funcionalidades
relacionadas (que geralmente consistem em diversas variáveis e
funções — que são chamadas de propriedades e métodos quando
estão dentro de objetos).

## Eventos

- ações executadas quando algo acontece na página web
- Normalmente chamam funções do javascript.

# Arrays - 03/05/2022

objetivos:

- Array unidimensional
- Arrays bidimensionais
- Convertendo Array em String
- Propriedade: Tamanho do array
- Inserir e remover elemento no array
- Apagando um elemento em uma posição específic

## Array

- Arrays são usados para armazenar múltiplos valores em uma única variável.
- Podem ter mais de uma ou mais dimensões.
- primeiro valor de um array possui índice zero (0).

### Array bidimencional
(1,1)
- Linha e coluna.

### array tridimencional

(1, 1, 1)
- Primeira posição, qual planilha é.
- Segundo valor, linha.
- Terceiro valor, coluna.

### Metodos

toString: Vai transformar o array em string 
join: Você escolhe o tipo de separação, seja por virgula ou outros jeitos. ('***')
pop: remove o último elemento e guarda ele.
push: Insire um elemento no final do array e retorna o novo tamanho do novo array.
shift: Remove o primeiro elemento e retorna ele.
unshift: Incluir um elemento no inicio e retorna o tamanho do array.
delete nomeArray posição entre conchetes: Vai excluir um determinado elemento do array, porém,
seu valor fica como undefined.

# Strings - 09/05/2022

objetivos:

- Mais sobre strings
- Concatenando strings
- Métodos de strings
- Acesso a caracteres
- Tamanho da string
- Maiúsculas e minúsculas
- Substring e Slipt
- Substituir uma string dentro da string
- Remover espaços da string
- Métodos de buscar em strings

# Array de Objetos

objetivos:

- Compreender o uso de objetos e sua sintaxe;
- Conhecer o formato JSON.

## JSON

(JavaScript Object Notation) é um formato compacto, de padrão aberto e independente
usado para a troca de dados entre sistemas de forma simples e rápida

Transformar objeto em json:

- JSON.stringfy()

Transformar json em objeto:

- .parse()

# Estruturas condicionais

- Compreender o uso de estruturas e desvios condicionais;
- Conhecer o operador ternário;
- Aprender a utilização do swith-case.

## Desvios condicionais

- decidem o fluxo de execução de programa.
- estruturas condicionais simples (if), composta (if-else) e switch.
- decidir o que deve ser executado 

### Estrutura condicional simples

- usada para verificar se dada condição é atendida
- Se for, um conjunto de instruções deverá ser executado
- Se não, o fluxo de execução seguirá após o fim do bloco de  decisão

### Estrutura condicional composta

- A estrutura if-else prevê dois conjuntos de instruções para serem
executadas.
- Caso seja verdadeiro, executa um bloco, caso falso, executa outro.