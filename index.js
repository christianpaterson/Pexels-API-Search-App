// Declare variables
let container = document.querySelector("#response-div");
let searchBarForm = document.querySelector("#search-form");

//Display photos function
function displayPhotos(images) {
  images.forEach((image) => {
    let imgDiv = document.createElement("div");
    imgDiv.innerHTML = `
            <div class="img-div">
               <img src=${image.src.small}>
            </div>
        `;
    container.appendChild(imgDiv);
  });
}

//Dynamic photo rendering with event listener
searchBarForm.addEventListener("submit", function (e) {
  e.preventDefault();
  container.innerHTML = "";
  let inputValue = document.querySelector("#search-input").value;
  fetch(`https://api.pexels.com/v1/search?query=${inputValue}&per_page=20`, {
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
});

//Defaults chimpanzee photos
fetch("https://api.pexels.com/v1/search?query=chimpanzees&per_page=20", {
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
