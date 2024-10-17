var num = Math.floor(Math.random() * 3);
var imagens = [
    'img/foto1.png',
    'img/foto2.jpeg',
    'img/foto3.webp' 
];

var visualizar = imagens[num];
document.write('<h1> === APERTE F5 ===</h1>');
document.write(`<img src="${visualizar}">`);

