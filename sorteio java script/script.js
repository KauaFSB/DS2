var sorteio = Math.floor(Math.random() * 11);
console.log(sorteio);
var chutes = [];
   
function chutar() {
    var chute = parseInt(document.getElementById('chute').value);
    if (chute >= 0) {
        chutes.push(chute);
        verificarAposta(chute);
    }
}

function verificarAposta(chute) {
    if (chute == sorteio) {
        var alerta = document.getElementById('area-alerta');

        alerta.innerHTML = ("<div class='alert alert-success mt-5'>VOCÊ GANHOU!</div>");
    }
}

function verApostas() {
    var area_chutes = document.getElementById('area-chutes');
    chutes.forEach((item, i) => {
        area_chutes.innerHTML += `<li class="list-group-item">N° do chute: ${i+1} - Chute: ${item}</li>`;
    });
}
