const searchbar = document.querySelector(".search");
const submitBtn = document.querySelector(".search-btn");
const parentContainer = document.querySelector(".container");
const photoWrapper = document.querySelector(".photo-wrapper");

submitBtn.addEventListener("click", () => {
  getPhoto(searchbar.value);
  searchbar.value = "";
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getPhoto(searchbar.value);
    searchbar.value = "";
  }
});

const dotenv = require("dotenv").config();

function getPhoto(keyword) {
  const apiKey = process.env.PIXABAY_API_KEY;
  let apiURL = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&safesearch=true&per_page=3`;

  fetch(apiURL, {
    method: "GET",
    headers: { accept: "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      let imageURL = data.hits;

      imageURL.forEach((result) => {
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", `${result.webformatURL}`);
        photoWrapper.appendChild(imageElement);
      });
    })
    .catch((error) => alert(error.message));
}
