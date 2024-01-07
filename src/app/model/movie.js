const moviesData = [
  {
    id: 0,
    title: 'Migration',
    score: 72,
    imageUrl: 'https://resizing.flixster.com/JZYaPcQJsNfrhyXoxKf20_p54q8=/406x625/v2/https://resizing.flixster.com/PaF2nohEOe1U4u8uP_tFCOj1ciE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQyZjYzYzk0LTBjZmMtNGMxZi04ZjQ1LTZiNzBhNmRiOTk4MS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/cQfo0HJhCnE?si=abuOnp83U7Td1D6d',
  },
  {
    id: 1,
    title: 'Ferrari',
    score: 73,
    imageUrl: 'https://resizing.flixster.com/QEL5ezTZV_fcdXgg7VwLF6xSEKc=/406x625/v2/https://resizing.flixster.com/i9CeWWf69GItCAWYaYws0z92NSs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFiM2FmYWMxLWIyMDEtNDQ3OC04YjU4LWYxNDg4N2MyOWI0YS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/ERIBTIlVVJQ?si=85cYDaazILv3Yten',
  },
  {
    id: 2,
    title: 'Wonka',
    score: 83,
    imageUrl: 'https://resizing.flixster.com/ZJ5aqScAhzuxf3-3QdnKS3h0TC4=/406x625/v2/https://resizing.flixster.com/Bx2OFTZyXMQCB30_E6EmiA52wZo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiMzI0ODJhLTZmNzYtNDNkZC04MjdhLTBlODVhOTgzNzQ2Zi5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/otNh9bTjXWg?si=cQ3Jg3yzlSWApOVA',
  },
  {
    id: 3,
    title: 'American Fiction',
    score: 93,
    imageUrl: 'https://resizing.flixster.com/D6ibeGMz_eOsT_VtX73q5zUwcjg=/406x625/v2/https://resizing.flixster.com/Kes35WjbggKb9o6T7JG1nBGE2RE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M4ODA3YzJjLTA5YWItNDFhZi1hNDc5LTc0MWU0NWMxYTU3ZS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/i0MbLCpYJPA?si=G1hqp1MwnzwDZbNt',
  },
  {
    id: 4,
    title: 'Wish',
    score: 48,
    imageUrl: 'https://resizing.flixster.com/vazf4WmNLiT_T2l2_3Cjnrwi5kM=/406x625/v2/https://resizing.flixster.com/qIk5F8LNkRDAxu6Tn6XvYJ1rVMg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyODNiYmIxLTYyOWMtNDJiNi1iZmZlLTE4ZGQ2MGQwZGFiNS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/oyRxxpD3yNw?si=xhqZa1PIQX3rKaeb',
  },
];

export default class Movie {
  constructor(id, title, score, imageUrl, trailerUrl) {
    this.id = id;
    this.title = title;
    this.score = score;
    this.imageUrl = imageUrl;
    this.trailerUrl = trailerUrl;
  }

  // Method to retrieve an individual movie by id
  static getMovieById(id) {
    // Replace this with actual logic to fetch the movie from a database or API
    const data = moviesData.find((movie) => movie.id == id)

    if (!data) {
      console.error(`Movie with id ${id} not found.`);
      return null;
    }

    const movie = new Movie(data.id, data.title, data.score, data.imageUrl, data.trailerUrl);
    return movie;
  }

  // Method to retrieve the whole list of movies
  static getAllMovies() {
    // Replace this with actual logic to fetch the list of movies from a database or API
    return moviesData;
  }
}
