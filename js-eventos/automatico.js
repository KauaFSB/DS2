var imagens = [
    'img/foto1.webp',
    'img/foto2.webp',
    'img/foto3.jpg' 
];

var banner = document.getElementById("banner");

i = 0;

setInterval(() => {
    
    banner.src = imagens[i];
    i++
    if (i == 3) 
        i = 0;
    
}, 1000);