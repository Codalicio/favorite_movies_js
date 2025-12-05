const addMovieModalElement = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");

const toggleMovieModal = () => {
  addMovieModalElement.classList.toggle("visible");
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
