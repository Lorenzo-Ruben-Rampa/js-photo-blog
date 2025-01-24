// Seleziono l'elemento di output
const outputDiv = document.getElementById('output');

// Creo endpoint
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

let cards = [];

//Richiesta Ajax 
axios.get(endpoint)
    .then(responseObj => {
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
    outputDiv.innerHTML += `
                <div class="image-container">
                    <div class="card-container">
                        <div class="pin"></div>
                        <img class="images" src="${url}" alt="${title}">
                        <br> <br> <br>
                        <p class="tagline">${date}</p>
                        <p class="text">${title.toUpperCase()}</p>
                    </div>
                </div>
    `
    }
    // !!!BONUS // 
// Seleziono l'output del click           
const button = document.querySelector('button')

// INIZIO EVENTO CLICK   
button.addEventListener('click', buttonFunction); 

// Seleziono l'elemento di output
const outputOverlay = document.getElementById('overlay-container');  

//Funzione per ciclare le immagini ad ogni click
function buttonFunction() {
        // Ciclo i dati
        for (let i=0; i<cards.length; i++) {
            let card = cards[i];

        // Destrutturo l'oggetto
        const {url} = card;
    
        // Creo le card
        outputOverlay.innerHTML += `
                    <div class="overlay hidden">
                        <img src="${url}" class="clicked">
                    </div>
        `
        outputOverlay.classList.add('display');
        }
    }

})
    // Errore
    .catch(error => {
	console.error(error)
    })

// // !!!BONUS // 
// // Seleziono l'output del click           
// const button = document.querySelector('button')

// // INIZIO EVENTO CLICK   
// button.addEventListener('click', buttonFunction); 

// // Seleziono l'elemento di output
// const outputOverlay = document.getElementById('overlay-container');  

// //Funzione per ciclare le immagini ad ogni click
// function buttonFunction() {
//         // Ciclo i dati
//         for (let i=0; i<cards.length; i++) {
//             let card = cards[i];

//         // Destrutturo l'oggetto
//         const {url} = card;
    
//         // Creo le card
//         outputOverlay.innerHTML += `
//                     <div class="overlay hidden">
//                         <img src="${url}" class="clicked">
//                     </div>
//         `
//         outputOverlay.classList.add('display');
//         }
//     }

