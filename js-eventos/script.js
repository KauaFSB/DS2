function validar(elemento) {
    var erro = elemento.nextElementSibling;
    erro = erro.nextElementSibling

    if (elemento.value == "") {
        alert("Campo nao pode ficar vazio");
        elemento.style.borderColor = "red";     
    } else if (elemento.value.length < 3) {
        alert("texto deve ter ao menos 3 caracteres");
        elemento.style.borderColor = "red";
        elemento.style.color = "white";
    } else {
        elemento.style.borderColor = "white";
        elemento.style.color = "black";
        erro.innerHTML = "Tudo OK";
    }
}