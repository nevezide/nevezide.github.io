
let today = new Date();
console.log(today);


let toto = new Date('2022-05-01');
console.log(toto);

let timestamp = today.getTime(); // From UNIX EPOCH 1970-01-01


// Moment js : https://momentjs.com/
// Jouer dans la sandbox du site

today = moment();

let frToday = today.format('DD/MM/YYYY HH:MM:ss.SSS');

console.log(frToday);
