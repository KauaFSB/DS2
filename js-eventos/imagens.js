var num = Math.floor(Math.random() * 3);
var imagens = [
    'img/foto1.webp',
    'img/foto2.webp',
    'img/foto3.jpg' 
];

var visualizar = imagens[num];
document.write('<h1> === APERTE F5 ===</h1>');
document.write(`<img src="${visualizar}">`);

