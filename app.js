//api variables
const MY_API_KEY = 'RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC'
const limit = 9
const rating = 'g'
const lang = 'en'
let page = 0
let offset = 0

//reference each item
let gifResults = document.getElementById('gif_results')
let submit = document.getElementById('button')
const searchedGif = document.getElementById('gifSearch')
let addGifsButton = document.getElementById('addGifsBtn')



console.log(searchedGif)


submit.addEventListener('click', getResults)


async function getResults(evt) {
    //prevent reload 
    evt.preventDefault()
    
    //replace html elements
    gifResults.innerHTML = ""
    
    let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC&rating=g&limit=9&offset=${offset}&q=` + searchedGif.value;
    

    //retrieve data from API URL and turn it into json 
    const response = await fetch(apiUrl)
    const responseData = await response.json()

    let images = responseData.data

    images.forEach(element => {
        displayGifs(element)
    });

    searchedGif.value = ""

}

function displayGifs (gif) {
    let ourImage = gif.images.downsized.url
    
    ourHTML = '<img class=individual-gif src=' + ourImage + ' alt=Testing>'

    gifResults.innerHTML += ourHTML

}



