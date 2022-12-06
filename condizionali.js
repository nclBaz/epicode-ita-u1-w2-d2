/* const test = 11

if (test !== 10) {
  // ! = =
  console.log("Test passato, la condizione era true")
  console.log("Test passato, la condizione era true")
  console.log("Test passato, la condizione era true")
  console.log("Test passato, la condizione era true")
  console.log("Test passato, la condizione era true")
  console.log("Test passato, la condizione era true")
  console.log("Test passato, la condizione era true")
}
 */
// OPERATORI: >, >=, <, <=, ===, !==

/* ES:

- Condizione 1: utente deve essere maggiorenne
- Condizione 2: utente si deve chiamare Giorgio

AND LOGICO (&&)

Entrambe FALSE --> Condizione 1 AND Condizione 2 --> FALSE
Prima TRUE seconda FALSE --> Condizione 1 AND Condizione 2 --> FALSE
Prima FALSE seconda TRUE --> Condizione 1 AND Condizione 2 --> FALSE
Entrambe VERE --> Condizione 1 AND Condizione 2 --> TRUE

*/

/* const utente = {
  nome: "Giorgio",
  età: 20,
}

const utente2 = {
  nome: "Giorgio",
  età: 17,
}

// TESTO UTENTE 1
if (utente.nome === "Giorgio" && utente.età >= 18) {
  console.log("Può entrare")
}

// TESTO UTENTE 2
if (utente2.nome === "Giorgio" && utente2.età >= 18) {
  console.log("Può entrare")
} */

/* ES:

- Condizione 1: utente deve essere maggiorenne
- Condizione 2: utente si deve chiamare Giorgio

OR LOGICO (||)

Entrambe FALSE --> Condizione 1 OR Condizione 2 --> FALSE
Prima TRUE seconda FALSE --> Condizione 1 OR Condizione 2 --> TRUE
Prima FALSE seconda TRUE --> Condizione 1 OR Condizione 2 --> TRUE
Entrambe VERE --> Condizione 1 OR Condizione 2 --> TRUE

*/

/* const utente = {
  nome: "Giorgio",
  età: 20,
}

const utente2 = {
  nome: "Giorgio",
  età: 17,
}

// TESTO UTENTE 1
if (utente.nome === "Giorgio" || utente.età >= 18) {
  console.log("Può entrare")
}

// TESTO UTENTE 2
if (utente2.nome === "Giorgio" || utente2.età >= 18) {
  console.log("Può entrare")
}
 */

// **************************************** IF-ELSE *************************************

/* const utente = {
  nome: "Giorgio",
  età: 17,
}

// TESTO UTENTE
if (utente.nome === "Giorgio" && utente.età >= 18) {
  console.log("Può entrare")
} else {
  console.log("Non può entrare")
} */

const num = 60

if (num < 10) {
  console.log("Numero minore di 10")
} else if (num < 50) {
  console.log("Numero minore di 50")
} else {
  console.log("Numero maggiore o uguale di 50")
}
