//Si crea la griglia in modo dinamico al click sul bottone "play"
document.getElementById("grid-generator").addEventListener("click", 
function(){
    generateGrid();
    //creazione ciclo per riempire la griglia
    for (let i = 1; i < 100 + 1; i++){

    const gridElement = document.getElementById("grid");
    
    //Creazione elemento div
    const newSquare = generateElement("div");
    
    //Append il nuovo elemento
    gridElement.append(newSquare);

    //Aggiungo la classe all'elemento
    newSquare.classList.add("square");

    //Inserisco nel div il numero della casella 
    newSquare.innerHTML = i;

    //Aggiunta event listner per l'elemento cliccato
    newSquare.addEventListener("click", 
    function (){
    newSquare.classList.add("clicked");
    console.log(i);
    
    });
};
});

//Funzione che genera dinamicamente la griglia
function generateGrid(){
        //Creazione elemento div
        let newGrid = generateElement("div");

        //Andiamo a prendere l'elemento del DOM dove appendere l'elemento generato dinamicamente
        const gridContainer = document.getElementById("grid-container");

        //Settiamo gli attributi per poterlo poi manipolare col javascript
        newGrid.setAttribute("id", "grid");

        //Append al nuovo div generato
        gridContainer.append(newGrid);
        return gridContainer;
};


//Funzione per creare nuovi elementi 
function generateElement(tagType){
    let newElement = document.createElement(tagType);
    return newElement;
}
