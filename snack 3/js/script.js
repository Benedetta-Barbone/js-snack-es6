//SNACK 3
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare in console la bici con peso minore utilizzando destructuring e template literal

const biciclette = [
  { nome: 'Bicicletta1', peso: 8.2 },
  { nome: 'Bicicletta2', peso: 7.9 },
  { nome: 'Bicicletta3', peso: 6.8 },
  { nome: 'Bicicletta4', peso: 8.4 }
];

let pesoMinore = biciclette[0];

for (let bici of biciclette) {
    if (bici.peso < pesoMinore.peso) {
        pesoMinore = bici;
    }
}

const {nome, peso} = pesoMinore;

console.log(`La bici che pesa di meno è la ${nome} con un peso di ${peso} kg.`);