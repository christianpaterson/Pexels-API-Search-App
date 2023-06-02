let container = document.querySelector('#response-div');

function getPhotos(images) {
    images.forEach(image => {
        let imgDiv = document.createElement('div');
        imgDiv.innerHTML = `
            <div class="img-div">
               <img src=${image.src.small}>
            </div>
        `;
        container.appendChild(imgDiv);
    })
 }

 let searchBarForm = document.querySelector('#search-form');

 searchBarForm.addEventListener('submit', function(e) {
    e.preventDefault();

    container.innerHTML = "";
    let inputValue = document.querySelector('#search-bar').value;
    fetch(`https://api.pexels.com/v1/search?query=${inputValue}&per_page=25`,{
        headers: {
          Authorization: "LB6rfF6oyTb61KvNfA1WZMeWc3MB8eL9eVNeGadUuHlA0Z7sYclbEhi1"
        }
      })
         .then(resp => {
           return resp.json();
         })
         .then(data => {
           getPhotos(data.photos);
         })

 })

 fetch("https://api.pexels.com/v1/search?query=chimpanzees&per_page=25",{
   headers: {
     Authorization: "LB6rfF6oyTb61KvNfA1WZMeWc3MB8eL9eVNeGadUuHlA0Z7sYclbEhi1"
   }
 })
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      getPhotos(data.photos);
    })