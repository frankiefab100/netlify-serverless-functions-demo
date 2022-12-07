const searchbar = document.querySelector(".search");
const submitBtn = document.querySelector(".search-btn");
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

function getPhoto(keyword) {
  let apiURL = `/.netlify/functions/getPhotos?keyword=${keyword}`;

  fetch(apiURL, {
    method: "GET",
    headers: { accept: "application/json" },
  }).then((response) => response.json());
  photoWrapper.innerHTML = JSON.stringify(response);

  // .then((data) => {
  //   let imageURL = data.hits;
  //   // let imageURL = JSON.stringify(data.hits);
  //   // imageURL?.map((result) => {

  //   imageURL.forEach((result) => {
  //     let imageElement = document.createElement("img");
  //     imageElement.setAttribute("src", `${result.webformatURL}`);
  //     photoWrapper.appendChild(imageElement);
  //   });
  // })
  // .catch((error) => alert(error.message));
}
