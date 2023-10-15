const divisa = document.getElementById('divisa');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.fila .butaca:not(.ocupada)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let rate=1;
let movieList={
    "Super Movie":15,
    "HAHA Movie":10,
    "Explosions Movie":5,
    "PepaPig 2000":20
}
let ticketPrice = +movieSelect.value;
populateUI();

updateMovieSelector();


// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);// Creo variable al local storage i hi guardo el valor de movieIndex.
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.fila .butaca.escollida');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;

  if (divisa.value=="EUR"){
    total.innerText = ((selectedSeatsCount * ticketPrice *rate).toFixed(2))+" €.";
  }else{
    total.innerText = "$"+(selectedSeatsCount * ticketPrice)+".";
  }

  
 
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('escollida');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  ticketPrice= localStorage.getItem('selectedMoviePrice');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
  updateSelectedCount();
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('butaca') &&
    !e.target.classList.contains('ocupada')
  ) {
    e.target.classList.toggle('escollida');

    updateSelectedCount();
  }
});

function updateMovieSelector(){
    movieSelect.textContent = '';
    i=0;
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    for (const [titol, preu] of Object.entries(movieList)) {
        var opt = document.createElement('option');
        
        if (divisa.value=="USD"){
            opt.value = preu;
            opt.innerHTML =titol+" $"+preu;
            
        }else{
            opt.value = preu;
            
            preuEuro= (preu*rate).toFixed(2);
            opt.innerHTML =titol+" "+preuEuro+"€";
            
        }
        if(selectedMovieIndex==i){
            opt.selected=true;
        }
        movieSelect.appendChild(opt);
        i=i+1;
    }
}

divisa.addEventListener('change', e =>{
    moneda = e.target.value;
    if (moneda == "EUR"){
        fetch(`https://v6.exchangerate-api.com/v6/5d51097a34c6333140761d99/latest/USD`)
        .then(res => res.json())
        .then(data => {
            rate = data.conversion_rates["EUR"];
            updateSelectedCount();
            updateMovieSelector();
        })
    
    }else{
        rate=1;
        updateSelectedCount();
        updateMovieSelector();
    }

})
// Initial count and total set
updateSelectedCount();
updateMovieSelector();