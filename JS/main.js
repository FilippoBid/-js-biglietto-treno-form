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
    const cartaUno = document.getElementById ('cartauno');
    const cartaDue = document.getElementById ('cartadue');
    const carrozza = document.querySelector('.carrozza');
    const numeroTreno = document.querySelector('.numero-treno');
    let randomDieci = Math.floor (Math.random () * 10)
    let randomMille = Math.floor (Math.random () * 10000)
    
    let priceWithSale;
    
 //do le condizioni per l'inserimento dei dati  
    if(fullName.value == ""){
        alert("signore/a il nomeeeeeeeeeee!")
    }

    if(inKm.value == ""){
        alert("l'inteligenza artificiale non potra mai arrivare ad i livelli di un uomo ma se non metti i km mi sa che ti ha superato ! ")
    }
    if(!fullName.value == ""){
        cartaUno.className = "d-none";
        cartaDue.className += "d-block";
    }

    if(!inKm.value == ""){
        cartaUno.className = "d-none";
        cartaDue.className += "d-block";
    }

    if (sale == 'under18') {
        priceWithSale = noSaleKm - (noSaleKm * 0.2);
    }
    else if (sale == "over64") {
        priceWithSale = noSaleKm - (noSaleKm * 0.4);
    }
    else {
        priceWithSale = noSaleKm;
    }
    const prezzoFinale = document.querySelector('.outprice')
    prezzoFinale.innerHTML= priceWithSale.toFixed(2)

    carrozza.innerHTML = randomDieci
    numeroTreno.innerHTML = randomMille
    
    console.log(carrozza);



});





//funzione bottone lascia stare
deleteBtn.addEventListener("click",  function () {

    window.location.reload();
})