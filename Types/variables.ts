let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
movieTitle.toUpperCase();

let myNumber: number = 10;

let myBoolean: boolean = true;

// Type Inference

let tvShow = 'Olive Kitteridge';

const movies = ['Arrival', 'The THing', 'Aliens', 'Amadeus']
let foundAMovie: string;

for(let movie of movies) {
    if(movie === 'Amadeus') {
        foundAMovie = 'Amadeus';
    }
}