// Seleziono l'elemento di output
const outputArray = document.getElementById('output');

// Creo endpoint
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

//Richiesta Ajax 
axios.get(endpoint)
    .then(response => {
        const
    })
    .catch(error => {
	console.error(error)
    })
