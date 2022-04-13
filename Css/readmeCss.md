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