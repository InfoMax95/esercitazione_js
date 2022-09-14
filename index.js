// funzione somma
function somma(a,b,c,d,e) {
    return a+b+c+d+e; 
}
// funzione media
function media(a,b,c,d,e) {
    return (a+b+c+d+e)/5;
}
// stampo in console
console.log("somma: "+somma(2,3,4,5,7)+" media: "+media(2,3,5,6,4));

// chiedendo anno corrente e anno di nascita
// definisco l'età e quanto manca per arrivare a 100 anni
//let annoCorrente = parseInt(prompt("In che anno siamo?"));
//let annoNascita = parseInt(prompt("In che anno sei nato?"));
function eta() {
    return annoCorrente - annoNascita;
}
function toCento() {
    return (annoNascita + 100) - annoCorrente;
}
//console.log("eta: "+eta()+" anni per arrivare a 100: "+toCento());

const numeroGatti = parseInt(prompt("Inserire il numero di gatti"));
const numeroGattiPerFila = parseInt(prompt("Inserire il numero di gatti per ogni fila"));
const numeroFile = parseFloat(numeroGatti/numeroGattiPerFila);
console.log(Math.ceil(numeroFile));








