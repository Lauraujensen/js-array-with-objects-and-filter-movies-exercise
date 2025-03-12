"use strict";

//opbygger et Array med js objekter - indeholdende film
const movies = [
    {title:'Inception', genre:'sci-fi', year: 2010, duration: 2.28, img:'/img/inception.webp', url:'https://www.imdb.com/title/tt1375666/'},

    {title:'Forrest Gump', genre:'drama', year: 1994, duration: 2.22, img:'/img/forrest-gump.webp', url:'https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_1_tt_1_nm_6_in_0_q_forre'},

    {title:'Gladiator', genre:'action', year: 2000, duration: 2.35, img:'/img/gladiator.webp', url:'https://www.imdb.com/title/tt0172495/?ref_=fn_all_ttl_1'},

    {title:'Interstellar', genre:'sci-fi', year: 2014, duration: 2.49, img:'/img/interstellar.webp', url:'https://www.imdb.com/title/tt0816692/?ref_=fn_all_ttl_1'},

    {title:'It', genre:'horror', year: 1990, duration: 1.36, img:'/img/it.webp', url:'https://www.imdb.com/title/tt0099864/?ref_=nv_sr_srsg_7_tt_6_nm_2_in_0_q_it'},

    {title:'Pulp Fiction', genre:'drama', year: 1994, duration: 2.34, img:'/img/pulp-fiction.webp', url:'https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_pulp'},

    {title:'Superbad', genre:'comedy', year: 2007, duration: 1.53, img:'/img/superbad.webp', url:'https://www.imdb.com/title/tt0829482/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_superbad'},

    {title:'The Conjuring', genre:'horror', year: 2013, duration: 1.52, img:'/img/the-conjuring.webp', url:'https://www.imdb.com/title/tt1457767/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520conj'},

    {title:'The Dark Knight', genre:'action', year: 2008, duration: 2.32, img:'/img/the-dark-knight.webp', url:'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520dark'},

    {title:'The Godfather', genre:'drama', year: 1972, duration: 2.55, img:'/img/the-godfather.webp', url:'https://www.imdb.com/title/tt0068646/?ref_=nv_sr_srsg_5_tt_6_nm_0_in_0_q_the%2520g'},

    {title:'The hangover', genre:'comedy', year: 2009, duration: 2.28, img:'/img/the-hangover.webp', url:'https://www.imdb.com/title/tt1119646/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520hang'},

    {title:'The Matrix', genre:'sci-fi', year: 1999, duration: 2.16, img:'/img/the-matrix.webp', url:'https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_1_tt_6_nm_1_in_0_q_the%2520matrix'}
];

// Henter HTML-elementer 'movies-container' og 'category-select
const moviesContainer = document.getElementById('movies-container');

const selectedCategory = document.getElementById('category-select');

// Gennemløber hver film fra arrayet (movies (se const øverst) ), som indeholder js-objekter, der skal vises
function displayMovies(filmListe) { //filmliste er mit array/
    moviesContainer.innerHTML = ''; // Tømmer containeren for at undgå duplikering

   filmListe.forEach( (movie) => { //forEach tager enkelte film og løber igennem
        const movieElement = document.createElement('article'); 
        // Dette opretter en article for os, så vi ikke skal gøre det i HTML
       
       // Opbygger en HTML-struktur for hver film, som inkluderer titel, genre, årstal mm.
        movieElement.innerHTML = `
        
        <h3> ${movie.title} </h3>
        <p> Genre: ${movie.genre}</p>
        <p> Årstal: ${movie.year}</p>
        <p> Varighed: ${movie.duration}</p>

        <figure>
            <a href='${movie.url}' target='_blank'></a>
            <img src='${movie.img}' alt='${movie.title}'><img/>
        </figure>`;
        moviesContainer.appendChild(movieElement); //tilføjer artiklen vi har lavet
   });
}

// Indlæser alle film, når hjemmesiden loades fra vores array med js-objekter
displayMovies(movies);

selectedCategory.addEventListener('change', () =>{// addEventListener lytter til change - at noget skal ændre sig. Det den skal gøre, bliver kodet nedenunder:

    const selectedValue = selectedCategory.value; // Henter den valgte kategori/genre

    let filteredMovies;

    if(selectedValue == 'all'){
        filteredMovies = movies;
    }
    else{
        filteredMovies = movies.filter(movie => movie.genre === selectedValue);
    }

    displayMovies(filteredMovies);
}) 