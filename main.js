const listaDellaSpesa = [
    "acqua",
    "olio",
    "linguine",
    "guanciale",
    "uova"
];

const contenitore = document.getElementById("listaSpesa");


//creo il contatore
let i = 0;

//ciclo while con condizione di controllo
while(i < listaDellaSpesa.length) {
    //stampo l'elemento
    const element = listaDellaSpesa[i];

    const elementHTML = document.createElement("li");
    elementHTML.innerHTML = element;
    contenitore.append(elementHTML);

    //incremento il contatore
    i++;
}

document.getElementById("addBtn").addEventListener("click", function() {
    const nuovoElemento = document.getElementById("newElement").value;

    listaDellaSpesa.push(nuovoElemento);
    contenitore.innerHTML += `<li>${nuovoElemento}</li>`;

    //resetto (svuoto) il testo dell'input
    document.getElementById("newElement").value = "";

});

document.getElementById("deleteBtn").addEventListener("click", function() {
    const elementoDaEliminare = document.getElementById("newElement").value;

    const posizioneElemento = listaDellaSpesa.indexOf(elementoDaEliminare);
    
    if(posizioneElemento >= 0) {
        listaDellaSpesa.splice(posizioneElemento, 1);
    }

    //RIPETO il codice per inserire l'array in pagina
    contenitore.innerHTML = ``;

    let i = 0;
    //ciclo while con condizione di controllo
    while(i < listaDellaSpesa.length) {
        //stampo l'elemento
        const element = listaDellaSpesa[i];

        const elementHTML = document.createElement("li");
        elementHTML.innerHTML = element;
        contenitore.append(elementHTML);

        //incremento il contatore
        i++;
    }


});