const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmJiNWI2MjM5OTczN2RiYjQ0MWJjNDEzMTE1OTlkNCIsInN1YiI6IjYxMmY2OGZhMTIxOTdlMDA2NGNlNGU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-A2NyJUsQYv8sndSzIF9yecPzngGTxELRZz49400Q5U';
const headersAuthorization = {headers: {Authorization: `Bearer ${apiKey}`}};
const configMovies = '/discover/movie?api_key=';
const configGenre = '/genre/movie/list?api_key=';
const page = '&page='
const url = 'https://api.themoviedb.org/3/';
const withGenres = '&with_genres='

export {
    apiKey,
    configMovies,
    configGenre,
    page,
    url,
    withGenres,
    headersAuthorization
}
