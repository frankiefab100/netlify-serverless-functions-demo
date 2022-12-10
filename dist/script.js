const searchbar = document.querySelector(".search");
const submitBtn = document.querySelector(".search-btn");
const photoWrapper = document.querySelector(".photo-wrapper");

submitBtn.addEventListener("click", () => {
  getPhoto(searchbar.value);
  searchbar.value = "";
  photoWrapper.innerHTML = "";
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getPhoto(searchbar.value);
    searchbar.value = "";
    photoWrapper.innerHTML = "";
  }
});

async function getPhoto(keyword) {
  let apiURL = `/.netlify/functions/getPhotos?keyword=${keyword}`;

  try {
    const response = await fetch(apiURL, {
      method: "GET",
      headers: { accept: "application/json" },
    });
    const data = await response.json();

    for (let i = 0; i < data.imageURL.length; i++) {
      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", `${data.imageURL[i].webformatURL}`);
      photoWrapper.appendChild(imageElement);
    }
  } catch (error) {
    alert(error);
  }
}
