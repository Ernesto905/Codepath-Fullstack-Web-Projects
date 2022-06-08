//api variables
const MY_API_KEY = 'RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC'
const limit = 9
const rating = 'g'
const lang = 'en'

//reference each item
let gifResults = document.getElementById('gif_results')
let submit = document.getElementById('button')
let searchedGif = document.getElementById('gifSearch').value

submit.addEventListener('click', getResults)

async function getResults(evt) {
    console.log("I have been pushed")

    apiUrl = "https://api.giphy.com/v1/gifs/search?" + "q=" + searchedGif 
    + "&limit=" + limit + "&rating=" + rating 
    +  "&lang=" + lang + "&api_key=" + MY_API_KEY;

    //prevent default
    evt.preventDefault()
     


    //retrieve data from API URL and turn it into json 
    const response = await fetch(apiUrl)
    const responseData = await response.json()

    console.log(responseData)

}
