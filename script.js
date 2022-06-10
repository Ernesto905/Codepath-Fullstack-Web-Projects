//API variables and constants
const API_KEY = '2a933e575f282f006036a202af525013';
let page = 1;
let lang = 'en-US'
let baseYoutubeUrl = "https://www.youtube.com/embed/"

//DOM references
let searchBox = document.getElementById('search-input')
let searchButton = document.querySelector('.search-btn')
let showMoreButton = document.getElementById('load-more-movies-btn')
let movieArea = document.querySelector('.our-movie')
let individualMovie = document.querySelector('.movie-card')
let flixterLogo = document.getElementById('logo')
let popUp = document.getElementById("popup-1")
let popUpTitle = document.getElementById("popUp-title")
let popUpText = document.getElementById("popUp-text")



//buttons 
searchButton.addEventListener('click', getResults)
showMoreButton.addEventListener('click', displayMoreMovies)
flixterLogo.addEventListener('click', refreshSite)
mybutton = document.getElementById("myBtn");

function refreshSite() {

    showCurrentMovies();
}





/** Get results from API. */
async function showCurrentMovies() {
    let apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${lang}&page=${page}`;
    
    //connect to our API and extract JSON
    const response = await fetch(apiUrl);
    const jsonResponse = await response.json();
    const ourMovies = jsonResponse.results;
    
    //display individual movie details 
    ourMovies.forEach(function(element){
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
       
        displayMovieDetails(element)
    });
}


function displayMovieDetails(ourMovie) {
    let rating = ourMovie.vote_average 
    let movieName = ourMovie.original_title
    let movieId = ourMovie.id
    let posterPath = ourMovie.poster_path
    let ourImageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`

    
    movieArea.innerHTML += 
    `<div class="movie-card">`
    + `<div class="movie">` 
    +  `<img class="movie-poster" onclick="togglePopup('${movieId}')" id="${movieName}" src=` + ourImageUrl 
    +  ` alt="our-movie-image"><p class="movie-votes">`
    + `</div><br>`
    + `<p class="movie-votes">Rating: ${rating}</p> <p class="movie-title">${movieName}</p></div>`

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
        
        displayMovieDetails(element)
    });
}


async function togglePopup(movieId) {
    let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    let videoApiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
    
    const [response, videoResponse] = await Promise.all([
        fetch(apiUrl),
        fetch(videoApiUrl),
      ]);

    const ourMovie = await response.json()
    const ourVideo = await videoResponse.json()
    
   

    //Declare movie details (INCLUDE: runtime in minutes, Backdrop poster, release date, genres and a overview.)
    let title = ourMovie.original_title
    let releaseDate = ourMovie.release_date
    let runTime = ourMovie.runtime
    let overview = ourMovie.overview
    let backDrop = ourMovie.backdrop_path
    let genresList = ourMovie.genres
    let ourGenres = "";
    let ourImageUrl = `https://image.tmdb.org/t/p/w400/${backDrop}`
    let ourVideoUrl = baseYoutubeUrl + ourVideo.results[0].key
    
    //html to be inserted
    genresList.forEach(element => {
        ourGenres += element.name + " "
    });
    let ourHTML = "Release date: " + releaseDate
    + "<br>Runtime: " + runTime + " Minutes<br>"
    + "Genres: " + ourGenres 
    + `<br><img widht="400px" height="100px" src=${ourImageUrl}><br>`
    + "Overview: " + overview
    + `<iframe width="100%" height="320px" src="${ourVideoUrl}" title="YouTube video player">`


    //activate and write into popUp
    popUp.classList.add('active')

    popUpTitle.innerHTML = title;
    popUpText.innerHTML = ourHTML
} 


function closePopup(){
    popUp.classList.toggle('active')
}


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 

//initiate function call
showCurrentMovies();