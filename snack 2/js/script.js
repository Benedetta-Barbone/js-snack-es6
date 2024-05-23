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

const votiAlti = studenti.filter(studenti => studenti.voti >= 70)

console.log(votiAlti)

const votiEIdAlti = studenti.filter(studenti => studenti.voti >= 70, studenti.id>=120)

console.log(votiEIdAlti)