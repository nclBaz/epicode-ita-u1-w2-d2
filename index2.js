// STUDENTE EPICODE
// - nome
// - cognome
// - età
// - ha la webcam o no

// Gli oggetti sono definiti da: parentesi graffe che racchiudono un elenco di PROPRIETA' (coppia chiave:valore)

const studente = {
  id: 1,
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
}

console.log(studente)

// COME POSSO ACCEDERE AD UNA SINGOLA PROPRIETA' DELL'OGGETTO (IN LETTURA E IN SCRITTURA)??

console.log("L'età del primo studente è: ", studente.età)
console.log("Il nome del primo studente è: ", studente.nome)

studente.età = 30 // SOVRASCRIVO L'ETA' DEL PRIMO STUDENTE
console.log("L'età del primo studente è: ", studente.età)
