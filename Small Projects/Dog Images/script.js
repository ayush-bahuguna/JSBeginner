
//public api to get dogs list
let api_list = 'https://dog.ceo/api/breeds/list/all' ;


// fetch(api_list)
// .then(response => response.json())
// .then(data => document.querySelector('.dog').src = data) ;


// get list of all the breeds 
async function getDogList() {
    const response = await fetch(api_list) ;
    const data = await response.json() ;        //fetch returns promise, should be converted to json
    //console.log(data) ;                     
    createBreedList(data.message) ;             //function for drop down
}

/*populate drop down with the breeds
adding all the elements in drop down menu
dynamically, using object.keys to get map() to work
*/
function createBreedList(breedList) {
    document.getElementById('dogBreed').innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>
            Select a breed from the dropdown
        </option>
        ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    ` ;
}

//load image when a breed is selected
async function loadByBreed(breed) {
    deleteImage() ;
    if(breed != 'Select a breed from the dropdown') {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) ;
        const data = await response.json() ;
        //console.log(data.message) ;
        addImage(data.message) ;
    }
}

// to add the new image to the document when a breed is selected
function addImage(srcLink) {
    let el = document.createElement('img') ;
    el.setAttribute('src', srcLink) ;
    document.querySelector('.dogImage').appendChild(el) ;
}

// to remove the previous image from the document
function deleteImage() {
    var images = document.getElementsByTagName('img');
    while(images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
}
}

//calling the function
getDogList() ;