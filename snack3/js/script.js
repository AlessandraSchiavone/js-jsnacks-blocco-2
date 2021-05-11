// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
function newArray (array,a,b){
    var newarray = [];
    for (i=a;i<=b;i++){
       newarray.push(array[i]);
    }
    return newarray;
}
var array = [5,4,6,7,8,2,10,22,45,78,89,0];
console.log(array);
var a = 3;
var b= 8;
console.log("I valori scelti sono: " + a + " e "+ b);
if(a < b){
    var nuovoarray = newArray(array,a,b);
    console.log(nuovoarray);
}else{
    console.log("Attenzione a e b non li ha inseriti nel modo richiesto!");
}


