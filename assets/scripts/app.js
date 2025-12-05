const addMovieModalElement = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdropElement = document.getElementById("backdrop");

const toggleBackdrop = () => {
  backdropElement.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModalElement.classList.toggle("visible");
  toggleBackdrop();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
