console.log('JS - Palindroma')

//recupero elemento html che mi servirà per stampare
const resultElement = document.getElementById('result')

//chiedo all'utente di inserire una parola
const parola = prompt('Inserisci una parola palindroma')

//Verifico funzionamento prompt
console.log(parola)

//dichiaro la variabile che conterrà successivamente la parola invertita
let reverseParola = ''


/* creo la mia funzione che servirà ad invertire
i caratteri della stringa inserita dall'utente */
function palindroma(word) {

    //verifico acquisizione valore da parte della funzione del valore inserito
    console.log(parola)

    //inverto i caratteri della parola/stringa
    reverseParola = parola.split('').reverse(parola).join('')

    //verifico funzionamento inversione caratteri
    console.log(reverseParola)

    //out funzione valore vero o falso
    return result = parola === reverseParola


}

//invoco la funzione passandogli il valore inserito precedentemente dall'utente
risultato = palindroma(parola)

//stampo il valore boolean in outpu della mia funzione
console.log(result)

//Stampo nella pagina HTML
resultElement.innerHTML = result