// Dato l’array di nomi:
// const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.


// FOREACH
// const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
// console.log(myArray);

// const newArray = [];

// myArray.forEach((value, index, array) => {
//     if (index > 1 && index < 5) {
//         newArray.push(value);
//         console.log(newArray);
//     }
// });

// FILTER
const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
newArray = [];

const numeri = myArray.filter ((index) => {
    if (index > 1 && index < 5) {
        return true;
    } else {
        return false;
    }
}
);

newArray.push(numeri);
console.log(newArray);
