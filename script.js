let dicas = [
    "Feche a torneira enquanto escova os dentes.",
    "Separe o lixo reciclável.",
    "Evite o desperdício de alimentos.",
    "Apague as luzes ao sair do ambiente.",
    "Plante uma árvore sempre que possível.",
    "Prefira sacolas reutilizáveis.",
    "Use menos plástico descartável."
];

function mostrarDica(){

    let numero = Math.floor(Math.random() * dicas.length);

    document.getElementById("dica").innerHTML = dicas[numero];

}

let contador = 0;

function salvarArvore(){

    contador++;

    document.getElementById("contador").innerHTML = contador;

    if(contador == 10){
        alert("Parabéns! Você ajudou simbolicamente a salvar 10 árvores! 🌳");
    }

}
