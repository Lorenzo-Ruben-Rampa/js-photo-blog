// Seleziono l'elemento di output
const outputDiv = document.getElementById('output');

// Creo endpoint
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

//Creo un array vuoto
let cards = [];

//Richiesta Ajax 
axios.get(endpoint)
    .then(function(responseObj) {
        // Raccolgo i dati della response in una costante
        cards = responseObj.data;
        console.log(cards);

    // Ciclo i dati
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        // console.log(card);
    
    // Destrutturo l'oggetto
    const {title, date, url} = card;

    // Creo le card
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("image-container");
    cardDiv.innerHTML = `
                <div class="card-container">
                    <div class="pin"></div>
                    <img class="images" src="${url}" alt="${title}">
                    <br><br><br>
                    <p class="tagline">${date}</p>
                    <p class="text">${title.toUpperCase()}</p>
                </div>
                `;

    // !!!BONUS //   
    // Seleziono l'immagine creata e aggiungo l'evento click
            const imgElement = cardDiv.querySelector(".images");
            imgElement.addEventListener("click", function() { 
                zoomFunction(url);
            });

            // Aggiungo la card al DOM
            outputDiv.appendChild(cardDiv);
        
        }
    })
    
    .catch(function(error) {
        console.error("Errore nella richiesta API:", error);
    });

    
//Seleziono l'output
const outputOverlay = document.getElementById('overlay-container');

// Funzione per gestire il click su un'immagine
function zoomFunction(imageUrl) {
    outputOverlay.innerHTML = `
        <div class="overlay">
            <img src="${imageUrl}" class="clicked">
            <button id="close-button">Chiudi</button>
        </div>
    `;

    outputOverlay.classList.add('display');

    // Pulsante per chiudere l'overlay
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function() {
        outputOverlay.classList.remove('display');
    });
}