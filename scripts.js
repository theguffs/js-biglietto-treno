// 1 - chiedi N chilometri

let chilometri = prompt("Inserisci il numero di chilometri del viaggio:");

 // per convertire il valore inserito in un numero

chilometri = Number(chilometri);

 // Prezzo del biglietto per chilometro

const prezzoPerChilometro = 0.21;

 // Controlla se l'utente ha inserito un valore valido

if (!isNaN(chilometri) && chilometri > 0) {

     // Chiede l'età dell'utente

    let eta = prompt("Inserisci la tua età:");

     // Converte l'età in un numero

    eta = Number(eta);

     // Calcola il prezzo totale del viaggio

    let prezzoTotale = chilometri * prezzoPerChilometro;

     // Applica sconti in base all'età

     // Sconto del 20% per minorenni

    if (eta < 18) {
         prezzoTotale *= 0.80; 
    } 

    // Sconto del 40% per over 65

     else if (eta > 65) {
         prezzoTotale *= 0.60;
    }

 // Mostra il risultato in una forma umana sull'HTML

document.getElementById("output").innerText = "Il prezzo totale del viaggio è " + prezzoTotale.toFixed(2) + " €";
} else {

 // L'utente non ha inserito un numero valido

document.getElementById("output").innerText = "Non hai inserito un numero di chilometri valido.";
 }