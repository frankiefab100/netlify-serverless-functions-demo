const searchbar = document.querySelector(".search");
const submitBtn = document.querySelector(".search-btn");
const parentContainer = document.querySelector(".container");
const photoWrapper = document.querySelector(".photo-wrapper");
const photoElement = document.querySelector(".photo");

submitBtn.addEventListener("click", () => {
  getCondition(searchbar.value);
  searchbar.value = "";
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getCondition(searchbar.value);
    searchbar.value = "";
  }
});

function getCondition(keyword) {
  const apiKey = "10694009-840350dba3c047ed6f6b4f364";
  let apiURL = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      let imageURL = data.hits[0].pageURL;
      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", `${imageURL}`);
      photoWrapper.appendChild(imageElement);
    })
    .catch((error) => alert(error.message));
}
