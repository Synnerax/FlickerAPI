/*
* IMPORTS
---------------------------------------------------------------------------------------------- 
*/

import {
  getData
    } from './modules/getData.js';

import {
  getInputValue,
  getNumberOfImages,
  clearSearch
    } from './modules/userFunctions.js';
    


    
/*
* Declaring variables
----------------------------------------------------------------------------------------------
*/

let inputField = document.getElementById("search-field");
let searchButton = document.getElementById('search-button');



/*
* Puts Search text and number of inmage chosen from user in to the getData reuqest
* then pushes the data to createImages and clears the search box 
----------------------------------------------------------------------------------------------
*/
async function searchInitialized (){
  let photoArray = await getData(getInputValue, getNumberOfImages);
    createImages(photoArray);
    clearSearch();
}


/*
 *  Creates images with src attribute, also adds event listener for lightbox
----------------------------------------------------------------------------------------------
 */
function createImages(photoArray)  {
  const imageGallery = document.getElementById('gallery');
  imageGallery.innerHTML = "";
  const FARM = "https://farm";
  const DOMAIN = ".staticflickr.com/";
  photoArray.forEach(function(PHOTO) {
    let newImg = document.createElement("img");
    newImg.classList.add('gallery-image');
    let src = `${FARM}${PHOTO.farm}${DOMAIN}${PHOTO.server}/${PHOTO.id}_${PHOTO.secret}`;
    newImg.setAttribute('src', src + "_m.jpg")
    newImg.addEventListener('click', function() {
      showImageOriginal(src)
    });
    imageGallery.append(newImg);
  });
};

/*
 *  LightBox functions 
----------------------------------------------------------------------------------------------
 */

function lightBoxOverlay() {
  const lightBox = document.createElement("div");
  lightBox.id = "lightbox";
  lightBox.classList.add("active");
  document.body.appendChild(lightBox);
  return lightBox;
};

function showImageOriginal(src){
  const lightBox = lightBoxOverlay();
  const lightBoxImage = document.createElement("img");
  let imgUrl = src + '_z.jpg';
  lightBoxImage.src = imgUrl;
  lightBoxImage.classList.add("lightboximage");
  lightBox.appendChild(lightBoxImage);
  closeImage(lightBox);
}

function closeImage(lightBox) {
  lightBox.addEventListener("click", function(event) {
      if (event.target !== event.currentTarget) return;
      lightBox.remove();
  });
};


/*
* Event Listeners 
----------------------------------------------------------------------------------------------
*/
inputField.addEventListener('keydown', function(){
  searchInitialized;
});
searchButton.addEventListener('click', searchInitialized)
