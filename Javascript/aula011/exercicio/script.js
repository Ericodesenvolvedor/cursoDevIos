window.alert('Hello stranger!!');
console.log(document.title);

let sectionPrimary = document.createElement('section');
let article = document.createElement('article');

let tittleSection = document.createElement('h2');
let paragraphSection = document.createElement('p');

let titleArticle = document.createElement('h2');
let paragraphArticle = document.createElement('p');

document.body.appendChild(sectionPrimary);
document.body.appendChild(article);

tittleSection.innerHTML = 'Programação web';
paragraphSection.innerHTML = 'Abordando o front-end, tecnologias(html, css, javascript)'

sectionPrimary.appendChild(tittleSection);
sectionPrimary.appendChild(paragraphSection);

titleArticle.innerHTML = 'Programação servidor';
paragraphArticle.innerHTML = 'O lado do servidor só fica por trás dos panos';

article.appendChild(titleArticle);
article.appendChild(paragraphArticle);