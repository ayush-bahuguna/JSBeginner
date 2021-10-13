const quoteAPI = 'http://api.quotable.io/random' ;
const quoteDisplayElement = document.querySelector('.quote-display') ;
const quoteInputElement = document.querySelector('.quote-input') ;
let correct = true ;
    

//function to check correct or incorrect input and update text accordingly

quoteInputElement.addEventListener('input', () => {

    
    const arrayQuoteCharacters = document.querySelectorAll('span') ;
    
    //splitting input text into individual characters for easy comparison
    const arrayInputValue = quoteInputElement.value.split('') ;
    arrayQuoteCharacters.forEach((characterSpan, index) => {
        const character = arrayInputValue[index] ;
        
        //condition for text which is not typed yet
        if(character == null) {
            characterSpan.classList.remove('correct') ;
            characterSpan.classList.remove('incorrect') ;
            correct = false ;

        //condition for text which is correctly typed
        } else if(character === characterSpan.innerText) {
            characterSpan.classList.add('correct') ;
            characterSpan.classList.remove('incorrect') ;
            correct = true ;
        
        //condition for text which is incorrectly typed
        } else {
            characterSpan.classList.add('incorrect') ;
            characterSpan.classList.remove('correct') ;
            correct = false ;
        }
    }) ;

    //changing the quote after completely typing the quote
    if(correct) {
        renderNewQuote() ;
    }
}) ;


//fetching the data and passing the quote to render
function getRandomQuote() {
    return fetch(quoteAPI)
    .then(response => response.json())
    .then(data => data.content) ;
}

//function for displaying the quote
async function renderNewQuote() {
    const quote = await getRandomQuote() ;
    quoteInputElement.value = null ;

    /*
      splitting the quote into individual character element span
      for easy comparison while typing
    */
    quoteDisplayElement.innerHTML = '' ;
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span') ;
        characterSpan.innerText = character ;
        quoteDisplayElement.appendChild(characterSpan) ;
    });
}

//function call
renderNewQuote() ;