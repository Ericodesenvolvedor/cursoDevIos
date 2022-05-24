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

# Laços de repetição - 12/05/2022

objetivos:

- Laço while.
- Laço do-while.
- Laço For.
- Laços de repetição e arrays.

## Introdução

- Comandos utilizados para executar instruções mais de uma vez
- Loops de repetição de uma ou mais instruções com um número limitado de vezes.
- Testar uma condição

### while

- Repetição com teste no início do comando.
- Executado enquanto a condição for verdadeira.
- Contador com variável de controle da condição.

### do-while

- Os comandos repetidos são executados pelos menos uma vez.
- Condição é sempre testada no final.

### For

- Teste lógico no início do laço.
- Não executará nenhuma repetição, sem antes testar a condição.
- Chaves podem ser ocultadas se o comando contiver apenas uma instrução.

### repetição e arrays

- Percorrer array ou objetos de arrays.
- Usar o length para definir o final de sua execução.
- ex: myarray.lenght/ myarray(contador).

# Métodos de alto nível para manipular arrays - 16/05/2022

- Método forEach()
- Método map()
- Método filter()
- Método find()

## Método forEach()

- executa uma determinada função para cada um dos elementos de um array.
- não é executado em elementos vazios do array.

## Método map()

- cria um novo array com o resultado gerado pela chamada de uma função 
para cada elemento do array.

## Método filter()

- O método filter() cria um novo array com o resultado do filtro aplicado
pelo método.
- elementos que “passaram” na condição configurada no filtro.

## Método find()

- O método find() retorna o valor dos elementos do array que passarem na
condição configurada.
- porém o find() não cria um novo array.

# Classes e funções - 17/05/2022

- Compreender o conceito de classes e sua sintaxe;
- Conhecer os métodos de uma classe;
- Aprender o uso do this no contexto de funções.

# Manipulando o DOM Parte 1

objetivos:

- Compreender o uso do DOM (Document Object Model);
- Manipular elementos e estilos com JavaScript.

## DOM

- interface de programação multiplataforma e independente de linguagem
- mantida pela entidade World Wide Web Consortium (W3C).
- representação estruturada do documento como uma árvore.
- alterar a estrutura, estilo e conteúdo

### Métodos do DOM

- createElement(): cria um novo nó/elemento com um nome específico.
- appendChild() adiciona o nó/elemento criado em um elemento pai específico.

# Manipulando o DOM Parte 2 - 20/05/2022

- Em construção

# Manipulando o DOM Parte 3 - 23/05/2022

Objetivos:

- Método querySelector
- Eventos
- Método querySelectorAll
- Para aprender mais

## querySelector

- Retorna o primeiro elemento dentro do documento que corresponde ao 
seletor desejado.
- Parecido com seletores css.

## querySelectorAll

- Retorna todos os elementos presentes no documento que possuam o seletor desejado.
- o retorna uma lista dos elementos presentes  no documento que coincidam com o 
seletor ou grupo de seletores especificados.

# Manipulando o DOM Parte 4 - 24/05/2022