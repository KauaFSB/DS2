var num = Math.floor(Math.random() * 3);
var imagens = [
    'img/foto1.png',
    'img/foto2.jpeg',
    'img/foto3.webp' 
];

var textos = [
    '<h1>PROGRAMAÇÃO WEB</h1>',
    '<h1>BANCO DE DADOS</h1>',
    '<h1>REDES</h1>'
];

var visualizar = imagens[num];
var texto = textos[num];

document.write('<h1> === APERTE F5 ===</h1>');
document.write(`<img src="${visualizar}" alt="Imagem Aleatória">`);
document.write(`<p>${texto}</p>`);