/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log(pet);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
// */
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
// */
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let firstpet = pets.shift();

pets.push(firstpet);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let licensePlate = "";

  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    licensePlate += letters.charAt(randomIndex);
  }


  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    licensePlate += numbers.charAt(randomIndex);
  }

  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    licensePlate += letters.charAt(randomIndex);
  }

  car.licensePlate = licensePlate;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: 'Honda',
  model: 'Civic',
  color: 'white',
  trims: ['eternity', 'ride', 'or die'],
})
console.log(cars);

for (let index = 0; index < cars.length; index++) {
  const car = cars[index];
  console.log(car.trims);
  car.trims.pop()
  console.log(car.trims);
}
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let index = 0; index < cars.length; index++) {
  const car = cars[index];
  if (car.trims.length > 0) {
    justTrims.push(car.trims[0])
  }

}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (const car of cars) {

  if (car.color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }

}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let index = 0;

while (index < numericArray.length) {
  const currentValue = numericArray[index]

  if (currentValue === 32) {
    break;
  }
  console.log(currentValue);
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const nArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      nArray.push(7);
      break;
    case "n":
      nArray.push(11);
      break;
    case "u":
      nArray.push(21);
      break;
    case "z":
      nArray.push(26);
      break;
    case "d":
      nArray.push(4);
      break;
  
    default:
      break;
  }
}

console.log(nArray);
