/*const userKm = prompt("quanti Km vuoi percorrere?");

const userAge = prompt("quanti anni hai?");


let priceFull = (userKm * 0.21).toFixed(2);;

let priceSale; 

if (userAge < 18) {
    priceSale = priceFull - (priceFull * 0.2).toFixed(2);
    console.log (priceSale)

} else if (userAge > 64) {
    priceSale = priceFull - (priceFull * 0.4).toFixed(2);
    console.log (priceSale)

} else console.log (priceFull) */

const searchBtn = document.querySelector('.search');
const deleteBtn = document.querySelector('.delete');

searchBtn.addEventListener("click", function () {
    //nome preso e messo in output
    const fullName = document.querySelector('.nome-cognome');
    const nomeCognome = document.querySelector('.outName');
    nomeCognome.innerHTML = fullName.value;
    //km presi e moltiplicati in base all eta
    const inKm = document.querySelector('.distance');
    const noSaleKm = parseInt(inKm.value) * 0.21;
    const saleEl = document.getElementById('sale-option');
    const sale = saleEl.value;
    let priceWithSale;

    if(fullName.value == ""){
        alert("signore/a il nomeeeeeeeeeee!")
    }

    if(inKm.value == ""){
        alert("inserisci un numero di km ktm!")
    }

    if (sale == 'under18') {
        priceWithSale = noSaleKm - (noSaleKm * 0.2)
    }
    else if (sale == "over64") {
        priceWithSale = noSaleKm - (noSaleKm * 0.4)
    }
    else {
        priceWithSale = noSaleKm
    }

    console.log(priceWithSale);



});