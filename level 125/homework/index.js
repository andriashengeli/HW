const myForm = document.querySelector("form");
const movieDiv = document.getElementById("movieDiv");
const p = document.getElementById("message-p");

const API_KEY = "e99abff4";

const fetchMovie = async (name) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        renderMovie(data);
    } catch (error) {
        console.log(error);
    }
}


const renderMovie = (data) => {
    if(data.Error) {
        p.textContent = "Movie not found";
        return;
    }

    p.textContent = "";

    movieDiv.innerHTML = `
        <img src=${data.Poster}>
        <h3>Title: ${data.Title}</h3>
        <p>Year: ${data.Year}</p>
        <p>Raiting: <b>${data.imdbRating}/10</b><p>
        <p>Director: ${data.Director}</p>
    `
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const movieName = myForm.movieName.value;
    if(!movieName) {
        p.textContent = "Please fill out this field";
        return;
    }

    fetchMovie(movieName);
    myForm.reset();
})