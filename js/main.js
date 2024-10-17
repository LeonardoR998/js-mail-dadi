// ! TRACCIA //

// > Mail

// Chiedi all'utente la sua email,
// > controlla che sia nella lista di chi può accedere,
// > stampa un messaggio appropriato sull'esito del controllo.

// > Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// > Stabilire il vincitore, in base a chi fa il punteggio più alto.

// ! RACCOLTA DATI //

// > controlla che sia nella lista di chi può accedere,
// > stampa un messaggio appropriato sull'esito del controllo.

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// > Stabilire il vincitore, in base a chi fa il punteggio più alto.

// ! ELABORAZIONE //

// Lista di email autorizzate
const emailAutorizzate = [
  "utente1@email.com",
  "utente2@email.com",
  "utente3@email.com",
];

// Chiedi all'utente di inserire la sua email
const emailUtente = prompt("Inserisci la tua email:");

// Controlla se l'email è nella lista di autorizzati
if (emailAutorizzate.includes(emailUtente)) {
  console.log("Accesso consentito.");
} else {
  console.log("Accesso negato.");
}
