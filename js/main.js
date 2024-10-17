// ! TRACCIA //

// > Mail

// Chiedi all'utente la sua email,
// > controlla che sia nella lista di chi può accedere,
// > stampa un messaggio appropriato sull'esito del controllo.

// ! RACCOLTA DATI //

// > controlla che sia nella lista di chi può accedere,
// > stampa un messaggio appropriato sull'esito del controllo.

// ! ELABORAZIONE MAIL //

// Lista di email autorizzate
const emailAutorizzate = [
  "utente1@email.com",
  "utente2@email.com",
  "utente3@email.com",
];

// Chiedi all'utente di inserire la sua email
const emailUtente = prompt("Inserisci la tua email:");

// Controlla se l'email è nella lista di autorizzati

// ! SE l'email autorizzata è inclusa nella const
if (emailAutorizzate.includes(emailUtente)) {
  // -stampa il messaggio
  console.log("Accesso consentito.");
  // ! ALTRIMENTI stampa l'accesso negato
} else {
  console.log("Accesso negato.");
}
