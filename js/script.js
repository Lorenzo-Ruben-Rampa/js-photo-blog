// Seleziono l'elemento di output
const outputDiv = document.getElementById('output');

// Creo endpoint
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

const cards = '';

//Richiesta Ajax 
axios.get(endpoint)
    .then(responseObj => {
        // Raccolgo i dati della response in una costante
        const cards = responseObj.data;
        console.log(cards);
    // Ciclo i dati
    for (i=0; i<cards.length; i++) {
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
                        <p class="tagline">${date}</p>
                        <p class="text">${title}</p>
                    </div>
                </div>
    `
    }
})
    // Errore
    .catch(error => {
	console.error(error)
    })
    
