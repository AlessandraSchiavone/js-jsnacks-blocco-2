// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var bici = [
    {
        nome:"Bic1",
        peso:10,
    },
    {
        nome:"Bic2",
        peso:19,
    },
    {
        nome:"Bic3",
        peso:14,
    },
    {
        nome:"Bic4",
        peso:12,
    },
    {
        nome:"Bic5",
        peso:13,
    },
    {
        nome:"Bic6",
        peso:18,
    },
    {
        nome:"Bic7",
        peso:17,
    },
    {
        nome:"Bic8",
        peso:16,
    },
    {
        nome:"Bic9",
        peso:11,
    },
    {
        nome:"Bic10",
        peso:12,
    }
]
console.log(bici);
var minPeso;
var pesi = [];

for(i=0;i<bici.length;i++){
    pesi.push(bici[i].peso);
}
minPeso =minimo(pesi);

function minimo(pesi) {
  return Math.min.apply(Math, pesi);
}
console.log("Il minor peso è:", minPeso);
for(i=0; i< bici.length;i++){
    if(bici[i].peso == minPeso){
        console.log("La bici con minor peso è:", bici[i].nome);
    }
}
