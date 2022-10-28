const userKm = prompt("quanti Km vuoi percorrere?");

const userAge = prompt("quanti anni hai?");

/*const actualFullDate = new Date(); 

const actualYear = actualFullDate.getFullYear()

console.log(actualYear) */

let priceFull = (userKm * 0.21).toFixed(2);;

let priceSale; 

if (userAge < 18) {
    priceSale = priceFull - (priceFull * 0.2).toFixed(2);
    console.log (priceSale)

} else if (userAge > 64) {
    priceSale = priceFull - (priceFull * 0.4).toFixed(2);
    console.log (priceSale)

} else console.log (priceFull)