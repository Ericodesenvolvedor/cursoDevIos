# Aula de css 

# Introdução ao Css 28/03/22

- Criada em 1995
- Destaque entre 1997 e 1999
- World Wide Web Consortium (W3C)

## Precedência no Css

- Inline: o estilo é colocado dentro da propria tag
- Incorporado: O estilo vai dentro da tag head (style)
- Externo: é criado um arquivo separadamente para ele. 

# Configuração de texto 29/03/22

## Propriedades introdutorias css

- background-color, color, margin, padding, font-family, font-style, etc...

## Cores em páginas na web.

- Rgb (red, green, blue)
- Hexadecimal (#ff0088)
- hsl (Matriz, saturação e intensidade)

## Configurações de Textos

- font-family: configura o tipo da sua fonte (arial, verdana, sans-serif)
- background-color: vai adicionar uma cor ao fundo. 

## propriedades font line e text

- text-indent: vai configurar o recuo da primeira linha do elemento.
- text-shadow: vai dar um sombreamento para o texto (1px 1px 10px black)

# Class 30/03/22

O seletor de classe é usado no CSS, quando queremos aplicar um estilo em um grupo de
elementos HTML e não em um único elemento.

## class no elemento

- A class é usado dentro do elemento passando-se como um atributo, para poder usar a class
é preciso colocar um 

.NomeClass { propriedade:valorPropriedade }

## class em multiplos elementos

- Você pode definir uma class padrão para aplicar os mesmo eestilos para alguns elementos,
como por exemplo um background padrão para alguns elemetos.

p class = "fundo"
h1 class = "fundo"

## Multiplas classes no elemento

- Você pode adicionar duas class dentro do mesmo elemento. 

class = "class1 class2"

# Id 31/03/2022

O seletor de id é usado no CSS para identificar e aplicar uma regra CSS exclusivamente a 
um único elemento em uma página web.

# Aula sexta feira - 01/04/2022

- Deepfake
- conhecendo o deepfake (substitui rostos e vozes em videos falsos)
- formulario

# Elementos visuais 04/04/2022

Os elementos visuais vão dar uma melhor aparência para o seu site. 

## border e hr

Border - alguns valores:

inset, outset, double, groove, ridge, solid, dashed e dotted.

Modificações css: 

border-width, border-color, border-style.
border-top, border-right, border-bottom e border-left.

## Estilo CSS em elemento img 

O elemento figure representa o conteúdo independente, frequentemente com uma legenda 
figcaption, e é normalmente referido como uma única unidade como, por exemplo, uma imagem.

## background-image

A propriedade background-image do CSS permite configurar 
uma imagem como plano de fundo na área de um elemento do HTML.

## background-repeat

Por padrão, o navegador repete a imagem por todo plano de fundo. Você 
pode alterar esse comportamento configurando a propriedade background-repeat 
com um dos seguintes valores:

- repeat
- no-repeat
- space
- round
- space repeat
- round space

## background-position

Permite definir o local da sua imagem na página de acordo com valores numéricos 
(em pixels, porcentagem, etc.) ou pelos rótulos: 
- left padrão, top, center, bottom, and right.

## background-attachment

Configura se a imagem irá rolar com o resto da página (scroll) ou se irá permanecer fixa 
(fixed).

## background-size

- Redimensionar a imagem com valores de largura width e altura height
- pixels ou porcentagem, ou com rótulos como: cover (cobre toda a área 
disponível, preservando o aspect radio) ou contain. 

# Margin x Padding 05/04/2022

- Entender as diferenças entre Margin e Padding;
- Configurar a propriedade margin;
- Configurar a propriedade padding.

## Box Model

o termo Box Model é uma caixa (box) retangular e o CSS box model é essencialmente essa 
caixa com diversas camadas em volta do conteúdo, que é formada por padding, border e margin.

## Padding

- É o espaço entre o conteúdo e a borda, ou seja, está do lado de dentro da borda.

## Margin

é o espaço entre a borda o elemento HTML e o próximo elemento da sua página web, ou seja, 
está do lado de fora da borda.

# Medidas no CSS - 06/04/2022

objetivos: 

- Conhecer as medidas absolutas e relativas;
- Aplicar as medidas absolutas e relativas.

## Medidas absolutas

- Cm: centrimetros
- mm: milimetros
- in: polegadas
- px: pixels
- pt: points
- pc: paica

## Medidas relativas

- em: em relação ao tamanho da fonte do elemento.
- ex: relativo a altura x das fonte atual.
- ch: relativo a largura do 0.
- rem: relativo ao tamanho da fonte o elemento raiz.
- vw: em relação a 1% da largura do viewport. 
- vh: em relação a 1% da altura do viewport.
- vmin: em relação a 1% da dimensão menor do viewport.
- vmax: em relação a 1% da dimensão maior do viewport.
- %: relativo ao elemento pai.

# Css float - 07/04/2022

A propriedade float do CSS coloca um elemento do lado direito
ou esquerdo de um conteúdo, permitindo que o texto e outros
elementos alinhados envolvam esse elemento.

Valores possiveis: 

- none: Valor padrão.
- left: A esquerda.
- right: A direita.

## Clear float

Algumas vezes você pode querer forçar todos que todos os
elementos fiquem alinhados um embaixo do outros, para isso você
pode usar a propriedade clear.

Valores possiveis: 

- none: Valor padrão.
- left: A esquerda.
- right: A direita.
- both: ambos.

## CSS Box Sizing

- content-box: valor padrão, o valor padding e de border são somadas a altura e 
largura do elemento, assim ele ocupa um espaço maior.
- border-box: configura o navegador para considerar que padding e border já 
fazem parte da altura e da largura do elemento. 

# Aula de sexta-feira - Cibersegurança 08/04/2022

- Video: Privacidade e segurança na internet
- Segurança privacidade
- Segurança privacidade online
- Questionário - Cibersegurança

# Pseudoclasses e Pseudoelementos

## Pseudoclasse

Pseudoclasse é uma palavra-chave usada para aplicar um efeito especial a um seletor, ou 
seja, ela define um estado especial para um determinado elemento HTML. A pseudoclasse 
seleciona elementos para aplicar uma determinada ação, propriedade etc.

Alguns exemplos:

- first-child
- last-child
- nth-child (posição)
- hover

## Pseudoelementos

Pseudoelemento é uma palavra-chave usada para estilizar uma parte específica de um 
determinado elemento. A sintaxe do pseudoelemento é:

# Media query

objetivos: 

- Compreender o uso de At-Rules;
- Compreender o uso de Media Query;
- Aplicar diferentes formatações conforme o tamanho do Viewport

## At-rules

O CSS tem diversas regras, que são denominadas At-Rules, que são declarações
com instruções de como o CSS irá se comportar. At-rules são iniciadas com o sinal
de arroba (@), seguido por um identificador e terminando com um ponto-e-vírgula
(;).

### @charset: 
- define o conjunto de caracteres (codificação) usado pelo CSS.

### @import: 
- informa ao CSS para incluir uma folha de estilos externa.

### @namespace (en-US): 
- informa ao CSS que todo o conteúdo deve ser considerado prefixado com um namespace XML.

Existe também um subconjunto de declarações, que pode ser usado como uma
regra de uma folha de estilos, dentro de um grupo de regras condicional:

### @media: 
- um grupo de regras condicional que é aplicado ao conteúdo caso o
dispositivo de exibição atenda com a condição de mídia definida (media query).

### @document (en-US): 
- um grupo de regras condicional que é aplicado ao conteúdo
caso o documento atenda aos critérios da condição definidos.

### @page: 
- descreve o aspecto das mudanças do layout que serão aplicadas ao imprimir o documento

### @font-face: 
- descreve o aspecto de uma fonte externa que deve ser baixada.

### @supports (en-US): 
- um grupo de regras condicional que é aplicado ao conteúdo
caso o navegador atenda aos critérios da condição definidos.

### @keyframes: 
descreve o aspecto das etapas intermediárias em uma sequência de
animação CSS. Ele é muito usado para declarar variáveis em CSS.

### @viewport: 
descreve os aspectos da área de visualização para dispositivos com
tela pequena.

### @counter-style: 
define estilos de contador específicos que não fazem parte do
conjunto predefinido de estilos.

### @property: 
descreve o aspecto de propriedades e variáveis personalizadas.
font-feature-values (plus @swash, @ornaments, @annotation, @stylistic,

### @styleset w @character-variant): 
define nomes comuns na font-variant-alternates
para recurso ativado de forma diferente no OpenType.

### @color-profile: 
permite um perfil de cores definido para uso na função color().

# Flexbox

objetivos: 

- Compreender a criação de diferentes layouts com o uso do flexbox;
- Conhecer as diversas propriedades do flexbox;
- Aplicar os recursos do flexbox nas folhas de estilo.

## FlexBox Align

- O objetivo do Flexbox é propor um layout flexível
- Podem ser configurados tanto na horizontal ou vertical

## Propriedades do flexbox

Propriedades container:

### display flex: 
- A propriedade display pode definir um container como flexível.

### Flex direction: 
- configura a direção dos itens flexíveis, ou seja, ela estabelece o main-axis do container. 

### flex-wrap:
- configura se os itens serão exibidos em múltiplas linhas

### flex-flow
- Essa é uma abreviação das propriedades flex-direction e flex-wrap. Com uma única
instrução você pode configurar a direção e a múltiplas linhas de uma vez.

### justify-content
- configura como o navegador irá exibir qualquer espaço extra que
possa existir no container, ou seja, ela define o alinhamento
ao longo do main-axis do container.

### align-items
- A propriedade align-itens define o comportamento padrão de
como os itens flex estão  dispostos ao longo do cross-axis.

### flex-grow
- Largura dos itens.

### flex-basis
- define o tamanho padrão de um elemento antes do
espaço restante seja distribuído.

### align-self

- permite o alinhamento seja substituido dos demais itens.

# Grid CSS Layout - 14/04

- O que é Grid.
- Propriedades do elemento pai (Grid Container).
- Propriedades dos elementos filhos (Grid Items)
- Você sempre precisa definir um container para trabalhar com Grid layout.

## Grid item 
- São os filhos do grid container.

## Grid line
- São as linhas divisorias que formam a estrutura do grid. Elas podem ser as 
retas verticais ou horinzontais e estar em qualquer lado da linha ou coluna. 

## Sexta-feira - 15/04 - Feriado

# Grid parte 2 - 18/04

## Grid template columns e rows

- grid template columns define o tamanho das nossas colunas e também indicar quantas
colunas teremos.

- grid template rows define o tamanhos das nossas linhas e também indica quantas
linhas teremos.

## Shorthand 

- grid template: "" valor da linha "" valor da linha / valor das colunas 

exemplo: "header header" 25% "main main" 20% / 10% 10%

## alinhamento do conteiner

- align-content: vai alinhar o pai no espaço em vertical.
- justify-content: vai alinhar o pai no espaço na horizontal.
- place-content: um shorthand para align-content e justify-content

## alinhamento dos itens 

- align-items: vai alinhar seus itens filhos no espaço em vertical do seu pai.
- justify-items: vai alinhar seus itens filhos no espaço em horizontal do seu pai.
- place-items: um shorthand para align-items e justify-items.

## grid auto columns e grid auto rows

- grid auto columns: vai fazer com que todas as colunas tenham um valor fixo,
quando você passar do número de itens suportados definido por você. 

exemplo : grid-template-columns: 20px 20px (foram criados duas colunas, caso 
você tenha mais um item, você estará criando outra coluna)

- grid auto rows: vai fazer com que todas as linhas tenham um valor fixo,
quando você passar do número de itens suportados definido por você. 

exemplo : grid-template-rows: 20px 20px (foram criados duas linhas, caso 
você tenha mais um item, você estará criando outra linha).
 
# Grid e Flexbox - 19/04

objetivos: 

- Compreender a criação de diferentes layouts com o uso
do Grid CSS e flexbox;
- Conhecer as diversas propriedades do Grid CSS e flexbox;
- Aplicar os recursos do Grid CSS e flexbox nas folhas de
estilo.

## impares e pares usando nth-child

- odd: impar
- even: par

# Bootstrap Parte 1 - 20/04 

objetivos:

- Conhecer o framework Bootstrap;
- Aplicar o framework Bootstrap na criação de páginas web.

O que é bootstrap:

Bootstrap é um framework web livre e de código aberto (opensource) 
para o desenvolvimento em HTML, CSS e JavaScript, quevocê pode usar para 
o projetar os componentes da interface e do front-end de sites e aplicações web.

# Quinta-feira - feriado - 21/04/22

# sexta-feira - feriado 22/04/22

# Bootstrap 2 - 25/04/22

- Baixando arquivo txt da aula.