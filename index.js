// Declare variables
const container = document.querySelector("#response-div");
const searchBarForm = document.querySelector("#search-form");
const button = document.querySelector('button');
const elements = ["grass", "rainy", "fire", "sky"];
let counter = 0;

//Display photos function
function displayPhotos(images) {
  container.innerHTML = "";
  images.forEach((image) => {
    let imgDiv = document.createElement("div");
    imgDiv.classList.add('img-div');
    imgDiv.innerHTML = `
               <img src=${image.src.original}>
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
  let inputValue = document.querySelector("#search-input").value;
  fetchPhotos(inputValue);
});

//Cycle through the elements
button.addEventListener('click', function() {
  fetchPhotos(elements[counter]);
  if(counter < elements.length) {
    counter++;
  } else {
    counter = 0;
  }
})

//Default space photos
fetchPhotos('space');