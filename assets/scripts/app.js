const addMovieModalElement = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdropElement = document.getElementById("backdrop");
const cancelAddMovieButton =
  addMovieModalElement.querySelector(".btn--passive");

const toggleBackdrop = () => {
  backdropElement.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModalElement.classList.toggle("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

backdropElement.addEventListener("click", backdropClickHandler);

startAddMovieButton.addEventListener("click", toggleMovieModal);
