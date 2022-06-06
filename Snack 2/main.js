// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi
// contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        nome: "juventus",
        punti: Math.floor(Math.random() * 100),
        falli: Math.floor(Math.random() * 100)
    },
    {
        nome: "inter",
        punti: Math.floor(Math.random() * 100),
        falli: Math.floor(Math.random() * 100)
    },
    {
        nome: "milan",
        punti: Math.floor(Math.random() * 100),
        falli: Math.floor(Math.random() * 100)
    },
    {
        nome: "roma",
        punti: Math.floor(Math.random() * 100),
        falli: Math.floor(Math.random() * 100)
    },
    {
        nome: "lazio",
        punti: Math.floor(Math.random() * 100),
        falli: Math.floor(Math.random() * 100)
    },
    {
        nome: "fiorentina",
        punti: Math.floor(Math.random() * 100),
        falli: Math.floor(Math.random() * 100)
    }
]

const {nome, falli} = squadre;
console.log(nome, falli);

const nuovosquadre = [];

nuovosquadre.push(squadre);
console.log(nuovosquadre);
