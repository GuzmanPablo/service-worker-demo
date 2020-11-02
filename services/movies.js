import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2'
});

export const getMovieList = async (page = 1) => {
    const response = await instance.get(`/list_movies.json?page=${page}`);
    if (response.status === 'error') throw new ReferenceError('API error');
    return response.data.data.movies;
};

export const getSugestions = async (id) => {
    const response = await instance.get(`/movie_suggestions.json?movie_id=${id}`);
    if (response.status === 'error') throw new ReferenceError('API error');
    return response.data.data.movies;
};

export const getMovieDetails = async (id) => {
    const response = await instance.get(
        `/movie_details.json?movie_id=${id}&with_cast=true&with_images=true`
    );
    if (response.status === 'error') throw new ReferenceError('API error');
    return response.data.data.movie;
};
