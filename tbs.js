const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat");
const movieSelect = document.getElementById("movie");

populateUI();


// save selected movie index
function setMovieData(movieIndex) {
  localStorage.setItem("selectedMovieIndex", movieIndex);

}

// Update total

//function updateSelectedCount() {
 // const selectedSeats = document.querySelectorAll(".row .seat.selected");

 // const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  //localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));


//}

// get data from local storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// movie select event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

//seat click event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// initial count and total

updateSelectedCount();
