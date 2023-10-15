const moneda1 = document.getElementById ('moneda1');
const moneda2 = document.getElementById ('moneda2');
const num1 = document.getElementById ('num1');
let num2 = document.getElementById ('num2');
const loading = document.getElementById('loading')

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calcul() {
    moneda1seleccionada = moneda1.value;
    moneda2seleccionada = moneda2.value;

    if (num1.value<0 ){
        num1.value=1; //NOMBRES NEGATIUS
        alert ("No s'accepten nombres negatius.")
    }
    loading.innerText="LOADING..."; //LOADING IN
    fetch(`https://v6.exchangerate-api.com/v6/5d51097a34c6333140761d99/latest/${moneda1seleccionada}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(moneda2seleccionada);
        console.log(num2);
        const rate = data.conversion_rates[moneda2seleccionada];
        
        rateEl.innerText = `1 ${moneda1seleccionada} = ${rate} ${moneda2seleccionada}`;

        num2.value = (num1.value * rate).toFixed(2);
        loading.innerText=""; //LOADING OUT

    })
    
    .catch(err=>{ //ERRROR API
        alert("Error: "+err);
    });
}

moneda1.addEventListener('change', calcul);
moneda2.addEventListener('change', calcul);
num1.addEventListener('input', calcul);
num2.addEventListener('input', calcul);

swap.addEventListener('click', () => {
    const guardar = moneda1.value;
    moneda1.value = moneda2.value;
    moneda2.value = guardar;
    
    calcul();
});

calcul();