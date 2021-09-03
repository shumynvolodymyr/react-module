export const ImageBuilder = (poster_path, size) => {
    return `https://image.tmdb.org/t/p/w${size}${poster_path}`
};
