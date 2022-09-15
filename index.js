// funzione somma
function somma(a,b,c,d,e) {
    return a+b+c+d+e; 
}
// funzione media
function media(a,b,c,d,e) {
    return (a+b+c+d+e)/5;
}
// stampo in console
// console.log("somma: "+somma(2,3,4,5,7)+" media: "+media(2,3,5,6,4));

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

// esercizio sugli arrotondamenti
// const numeroGatti = parseInt(prompt("Inserire il numero di gatti"));
// const numeroGattiPerFila = parseInt(prompt("Inserire il numero di gatti per ogni fila"));
// const numeroFile = parseFloat(numeroGatti/numeroGattiPerFila);
// console.log("file totali: "+Math.ceil(numeroFile));
// const gattiMancanti = (numeroFile*numeroGattiPerFila)-numeroGatti;
// console.log("gatti mancanti nell'ultima fila: "+gattiMancanti);

// esercitazione sull'ora
// const sec = parseInt(prompt("Digita un numero di secondi da trasformare in ore,minuti e secondi"));
// const hour = parseInt(sec/3600);
// const min = parseInt((sec-(hour*3600))/60);
// const secondi = parseInt((sec-(hour*3600)-(min*60)));
// console.log("ore: "+hour+" minuti: "+min+" secondi: "+secondi);

// verificare la validità della data
// const data = {
//     day: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
//     month: [1,2,3,4,5,6,7,8,9,10,11,12],
//     year: []
// }

// const request = prompt("Inserire una data separata da '-'");
// const myArray = request.split("-");
// console.log(myArray[0],myArray[1],myArray[2]);
// if(1<=parseInt(myArray[0])<=31 && 1<=parseInt(myArray[1])<=12 && 1920<=parseInt(myArray[2])<=2100) {
//     console.log("La data è valida");
// } else {
//     console.log("La data NON è valida");
// }

// gestione garage
// const garage = [
//     {
//         marca: "FCA",
//         modelli: ["PANDA", "PUNTO", "DOBLO"]
//     },
//     {
//         marca: "AUDI",
//         modelli: ["A3","A4","A5","A6","Q3"]
//     },
//     {
//         marca: "BMW",
//         modelli: ["X1","X2","X3","X4","X5"]
//     },
//     {
//         marca: "VW",
//         modelli: ["POLO", "GOLF", "T-ROC", "TIGUAN"]
//     }
// ]

// const insert = prompt("Inserisci una marca");
// this.stampaModelli();

function stampaModelli() {
    garage.forEach(element => {
        if(element.marca.includes(insert.toUpperCase())){
            for(i=0;i<element.modelli.length;i++) {
                console.log(element.modelli[i]);
            }
        } 
    });
}












