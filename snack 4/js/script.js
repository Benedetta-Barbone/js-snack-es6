//SNACK 4
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  { nome: 'SquadraA', 
    punti: 0, 
    falli: 0 
  },
  { nome: 'SquadraB', 
    punti: 0, 
    falli: 0 
  },
  { nome: 'SquadraC', 
    punti: 0, 
    falli: 0 
  },
  { nome: 'SquadraD', 
    punti: 0, 
    falli: 0 
  }
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let squadra of squadre) {
  squadra.punti = getRandomNumber(0, 50);  
  squadra.falli = getRandomNumber(0, 50);
}  


console.log(squadre);
