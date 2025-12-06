const addMovieModalElement = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdropElement = document.getElementById("backdrop");
const cancelAddMovieButton =
  addMovieModalElement.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputElements = addMovieModalElement.querySelectorAll("input");
const entryTextSectionElement = document.getElementById("entry-text");
const listRoot = document.getElementById("movie-list");

const movies = [];

const updateUi = () => {
  if (movies.length === 0) {
    entryTextSectionElement.style.display = "block";
  } else {
    entryTextSectionElement.style.display = "none";
  }
};

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

const clearMovieInputs = () => {
  for (const userInput of userInputElements) {
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}" />
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  listRoot.appendChild(newMovieElement);
};

const addMovieHandler = () => {
  const titleValue = userInputElements[0].value;
  const imageUrlValue = userInputElements[1].value;
  const ratingValue = userInputElements[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Required Fields are missing or incorrect rating selection");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInputs();
  updateUi();
  renderNewMovieElement(titleValue, imageUrlValue, ratingValue);
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdropElement.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
