//API variables and constants
const API_KEY = '2a933e575f282f006036a202af525013';
let page = 1;
let lang = 'en-US'

//DOM references
let searchBox = document.getElementById('search-input')
let searchButton = document.querySelector('.search-btn')
let showMoreButton = document.getElementById('load-more-movies-btn')
let movieArea = document.querySelector('.movie-card')



//buttons 
searchButton.addEventListener('click', getResults)
showMoreButton.addEventListener('click', displayMoreMovies)



/** Get results from API. */
async function showCurrentMovies() {
    let apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${lang}&page=${page}`;
    
    //connect to our API and extract JSON
    const response = await fetch(apiUrl);
    const jsonResponse = await response.json();
    const ourMovies = jsonResponse.results;
    
    //display individual movie details 
    ourMovies.forEach(function(element){
        displayMovieImg(element)
        displayMovieDetails(element)
    });
}


async function getResults(evt) {
    
    //cancle page reload
    evt.preventDefault();
    
    //connect to our API and extract JSON
    let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchBox.value}`
    const response = await fetch(apiUrl);
    const jsonResponse = await response.json();
    const ourMovies = jsonResponse.results;
    
    //remove all movies from screen 
    movieArea.innerHTML = ''

    //display individual movie details 
    ourMovies.forEach(function(element){
        displayMovieImg(element)
        displayMovieDetails(element)
    });
}


function displayMovieImg(ourMovie) {
    let posterPath = ourMovie.poster_path
    let ourImageUrl = `https://image.tmdb.org/t/p/w400/${posterPath}` 
    
    movieArea.innerHTML += `<img class="movie-poster" src=` + ourImageUrl + ' alt="our-movie-image">'
}

function displayMovieDetails(ourMovie) {
    let rating = ourMovie.vote_average 
    let movieName = ourMovie.original_title

    movieArea.innerHTML += `<p class="movie-votes">${rating}</p>`
    movieArea.innerHTML += `<p class="movie-title">${movieName}</p>`
}


async function displayMoreMovies() {
    page += 1;
    
    let apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${lang}&page=${page}`;

    if (searchBox.value.length != 0) {
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchBox.value}&page=${page}`
    }

    //connect to our API and extract JSON
    const response = await fetch(apiUrl);
    const jsonResponse = await response.json();
    const ourMovies = jsonResponse.results;

    //display individual movie details 
    ourMovies.forEach(function(element){
        displayMovieImg(element)
        displayMovieDetails(element)
    });
}

//initiate function call
showCurrentMovies();