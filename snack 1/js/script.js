const listaTavolo = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

const datiOspiti = listaTavolo.map((nome, index) => {
  return { guestName: nome,
           tableName: 'tavolo vip',
           place: index + 1,
  };
});


console.log(datiOspiti)
