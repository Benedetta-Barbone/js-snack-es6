//Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
//1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
//2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
//3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


const studenti = [
  {
    id: 213,
    nome: 'Giuseppina della Rovere',
    voti: 78,
  },
  {
    id: 110,
    nome: 'Paola Cortellessa',
    voti: 96,
  },
  {
    id: 250,
    nome: 'Andrea Mantegna',
    voti: 48,
  },
  {
    id: 145,
    nome: 'Gaia Borromini',
    voti: 74,
  },
  {
    id: 196,
    nome: 'Luigi Grimaldello',
    voti: 68,
  },
  {
    id: 102,
    nome: 'Piero della Francesca',
    voti: 50,
  },
  {
    id: 120,
    nome: 'Francesca da Polenta',
    voti: 84,
  }
];


const nomeMaiuscolo = studenti.map(studenti => studenti.nome.toUpperCase());

console.log(nomeMaiuscolo)