// for
// for(let index = 0; index<11;  index++){
//    let number = 10 * index;
//    console.log(number);
// }
// while
// let indexWhile =0;
// while(indexWhile<11){
    // let number = indexWhile*10
    // console.log(number)
    // indexWhile++;
// }
// do while
// let indexDoWhile=0
// do{
    // let number = indexDoWhile*10
    // console.log(number)
    // indexDoWhile++;
// }while(indexDoWhile<10)

function tablaMultiplicarFor(tabla,limite){
    for(let index = 0; index<limite;  index++){
        let number = tabla * index;
          console.log(number);
   }
}
function tablaMultiplicarWhile(tabla,limite){
    let indexWhile =0;
     while(indexWhile<limite){
         let number = indexWhile*tabla
         console.log(number)
        indexWhile++;
   }
}
function tablaMultiplicarDoWhile(tabla,limite){
    let indexDoWhile=0
    do{
     let number = indexDoWhile*tabla
     console.log(number)
     indexDoWhile++;
     }while(indexDoWhile<limite)
}

tablaMultiplicarFor(8,100)
tablaMultiplicarWhile(8,10)
tablaMultiplicarDoWhile(7,5)