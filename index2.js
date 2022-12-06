// STUDENTE EPICODE
// - nome
// - cognome
// - età
// - ha la webcam o no

// Gli oggetti sono definiti da: parentesi graffe che racchiudono un elenco di PROPRIETA' (coppia chiave:valore)

const studente = {
  id: 1, // Proprietà 0 --> NUMBER
  nome: "Riccardo", // Proprietà 1 --> STRING
  cognome: "Gulin", // Proprietà 2 --> STRING
  età: 18, // Proprietà 3 --> NUMBER
  haWebcam: true, // Proprietà 4 --> BOOLEAN
}

const studente2 = {
  id: 2,
  nome: "Claudio",
  cognome: "Pinna",
  età: 19,
  haWebcam: false,
}

const pet = {
  nome: "Tigro",
  specie: "Gatto",
  colore: "Rosso",
  anni: 10,
  "ha pedegree": true,
}

/* console.log(studente)

// COME POSSO ACCEDERE AD UNA SINGOLA PROPRIETA' DELL'OGGETTO (IN LETTURA E IN SCRITTURA)??

console.log("L'età del primo studente è: ", studente.età)
console.log("L'età del primo studente è: ", studente["età"]) // ALTERNATIVA ALLA DOT NOTATION (MEGLIO LA DOT NOTATION)
console.log("Il nome del primo studente è: ", studente.nome)

studente.età = 30 // SOVRASCRIVO L'ETA' DEL PRIMO STUDENTE
console.log("L'età del primo studente è: ", studente.età)

console.log(pet["ha pedegree"]) // QUANDO IL NOME PROPRIETA' CONTIENE UNO SPAZIO NON POSSO USARE LA DOT NOTATION

// CANCELLARE PROPRIETA' DALL'OGGETTO

delete studente.id // Elimina la proprietà id dallo studente
console.log(studente.id) // studente.id ora sarà undefined
 */

// COPIARE OGGETTI

/* const pet2 = pet // Non è la maniera giusta per copiare le proprietà da un oggetto ad un altro

console.log("Pet2: ", pet2)

pet.nome = "Pedro"

pet2.occhi = 3

console.log("Pet: ", pet)
console.log("Pet2: ", pet2) */

/* const pet2 = {}

Object.assign(pet2, pet) // COPIARE PROPRIETA' DA pet A pet2 IN MANIERA CORRETTA
// ALTERNATIVA A OBJECT.ASSIGN --> const pet2 = {...pet}

console.log("Pet2: ", pet2)

pet.nome = "Pedro"

pet2.occhi = 3

console.log("Pet: ", pet)
console.log("Pet2: ", pet2)
 */

// ********************************************** ARRAY *******************************************

const arrayDiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayDiStringhe = ["Adina", "Alessandro", "Samuele", "Vincenzo"]

console.log("Il primo elemento dell'array è: ", arrayDiStringhe[0].toUpperCase())
console.log("Il secondo elemento dell'array è: ", arrayDiStringhe[1])
console.log("Il terzo elemento dell'array è: ", arrayDiStringhe[2])
console.log("Il quarto elemento dell'array è: ", arrayDiStringhe[3].toUpperCase())
/* console.log("Il quarto elemento dell'array è: ", arrayDiStringhe[4].toUpperCase()) */

arrayDiNumeri[2] = 1230219308219038190 // Sovrascrivo il secondo elemento

console.log(arrayDiNumeri)
