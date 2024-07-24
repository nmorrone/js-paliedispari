console.log('JS - Pari o Dispari')

//l'utente scegli pari o dispari
let choice = prompt('Scegli: pari o dispari?, scrivi la tua scelta')

//l'utente scegli un numero da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))

//dichiaro la variabile somma
let somma = 0

//apro la mia funzione
function sum(numero, scelta) {

    //genero numero random da 1 a 5
    let botNumber = parseInt(5 * Math.random())

    //verifico funzionamento
    //console.log(botNumber)

    //mi dichiaro il valore dell'opzione di gioco scelta dall'utente
    choice = choice

    //Verifico funzionamento
    //console.log(choice)

    //faccio la somma dei numeri
    somma = userNumber + botNumber

    //verifico funzionamento
    //console.log(somma)

    //dichiaro la variabile che mi serve per capire se la somma è pari o dispari
    resto = somma % 2

    //verifico funzionamento
    //console.log(resto)

    /* scrivo la condizione per la quale, raggruppando, se il resto è 0 e ha scelto pari,
    o se il resto non è 0 e ha scelto dispari, comparirà il messaggio di aver vinto */

    //raggruppo tutto dentro un singolo if con l'operatore OR tra le 2 condizioni
    if ((resto === 0 && choice === 'pari') || (resto !== 0 && choice === 'dispari')) {

        alert('Complimenti. Hai Vinto!')

    }

    //messaggio di sconfitta qual'ora vincesse il PC
    else {

        alert('Mi dispiace, hai Perso!. Ricarica la pagina e riprova')


    }

}

//invoco la funzione creata
risultato = sum(userNumber, choice)