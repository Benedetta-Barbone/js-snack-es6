
//Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
//nome del tavolo (tableName),
//nome dell'ospite (guestName),
//posto occupato (place),
//Generiamo e stampiamo in console la lista per i segnaposto.

const listaTavolo = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

const datiOspiti = listaTavolo.map(nome => {
  return { guestName: nome,
           tableName: 'tavolo vip',
           place: '',
  };
});


console.log(datiOspiti)
