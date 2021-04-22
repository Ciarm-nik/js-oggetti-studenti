
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var descrizioneStudente = {
    nome: "Paolo",
    cognome: "Verdi",
    età: "23",
}


// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in descrizioneStudente) {
    // console.log(descrizioneStudente)
    console.log(descrizioneStudente[key])
}


// Creare un array di oggetti di studenti.

var studenti = [

    {
        "studente1": {
            nome: "Paolo",
            cognome: "Rossi",
        },
        "studente2": {
            nome: "Giovanni",
            cognome: "Verdi"
        },
        "studente3": {
            nome: "Luca",
            cognome: "Gialli"
        }
    }
]


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var key in studenti) {

    console.log(studenti[0]["studente1"].nome)
    console.log(studenti[0]["studente1"].cognome)

    console.log(studenti[0]["studente2"].nome)
    console.log(studenti[0]["studente2"].cognome)

    console.log(studenti[0]["studente3"].nome)
    console.log(studenti[0]["studente3"].cognome)
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var classe = [
    studente1 = {
        nome: 'Stefano',
        cognome: 'Rossi',
        età: '33'
    },
    studente2 = {
        nome: 'Vincenzo',
        cognome: 'Verdi',
        età: '45'
    }
];

console.log(classe)

studente3 = {
    nome: prompt('Inserisci il tuo nome'),
    cognome: prompt('Inserisci il tuo cognome'),
    età: prompt('Inserisci la tua età'),
};

classe.push(studente3);
console.log(classe);

