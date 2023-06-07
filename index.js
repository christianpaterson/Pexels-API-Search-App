// Declare variables
const container = document.querySelector("#response-div");
const searchBarForm = document.querySelector("#search-form");

//Display photos function
function displayPhotos(images) {
  images.forEach((image) => {
    let imgDiv = document.createElement("div");
    imgDiv.classList.add('img-div');
    imgDiv.innerHTML = `
               <img src=${image.src.large}>
        `;
    container.appendChild(imgDiv);
  });
}

//Fetch photos function
function fetchPhotos(query) {
  fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=20`, {
    headers: {
      Authorization: "LB6rfF6oyTb61KvNfA1WZMeWc3MB8eL9eVNeGadUuHlA0Z7sYclbEhi1",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      displayPhotos(data.photos);
    });
}

//Dynamic photo rendering with event listener
searchBarForm.addEventListener("submit", function (e) {
  e.preventDefault();
  container.innerHTML = "";
  let inputValue = document.querySelector("#search-input").value;
  fetchPhotos(inputValue);
});

//Default fire photos
fetchPhotos('fire');