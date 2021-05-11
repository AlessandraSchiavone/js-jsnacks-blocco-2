
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
var squadre = [
    {
        nome:"Napoli",
        punti:0,
        falli:0,
    },
    {
        nome:"Inter",
        punti:0,
        falli:0,
    },
    {
        nome:"Milan",
        punti:0,
        falli:0,
    },
];
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
var min=0;
var max=50;
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
function numeriRandom(min,max){
    return number = Math.floor(Math.random() * (max - min) + min);
}

for(i=0;i<squadre.length;i++){
    squadre[i].punti= numeriRandom(min,max);
    squadre[i].falli= numeriRandom(min,max);
}
console.log(squadre);
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var arrayDati= [];
for (i=0;i<squadre.length;i++){
    arrayDati.push(squadre[i].nome);
    arrayDati.push(squadre[i].falli);
}
console.log(arrayDati);