// ****** JSnack 1

// ---- soluzione con for
// let somma = 0;
// for(let i = 0; i < 5; i++){
//     const insNum = parseInt(prompt('Inserisci un numero'));
    
//     somma += insNum;
//     console.log(somma)
// }

// ---- soluzione con while
// let somma = 0

// let i = 0;
// while(i < 5){
//     i++;
//     const insNum = parseInt(prompt('Inserisci un numero'));
    
//     somma += insNum;
//     console.log(somma)
// }



// ***** Jsnack2
// const parola1 = prompt('Inserisci parola 1');
// const parola2 = prompt('Inserisci parola 2');

// let lunghezza1 = parola1.length;
// let lunghezza2 = parola2.length;

// if(lunghezza1 > lunghezza2){
//     console.log(parola1);
// }else if(lunghezza2 > lunghezza1){
//     console.log(parola2);
// }else{
//     console.log(parola1);
//     console.log(parola2);
// }


// ****** Jsnack3
let i = 0;
while(i < 1000){
    i++;
    let potenza = Math.pow(i, 2);

    let risPotenza = potenza;

    if(risPotenza < 1000){
    console.log(potenza);
    }
}   





