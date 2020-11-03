import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMovieDetails, getSugestions } from '../../../services/movies';
import ItemMovie from '../../../molecules/ItemMovie';

const Movie = () => {
    const router = useRouter();
    const { id } = router.query;

    const [movie, setMovie] = useState();
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (!id) return;
        getMovieDetails(id).then(setMovie);
        getSugestions(id).then(setSuggestions);
    }, [id]);

    if (!movie) return false;

    const genres = (accum, curr, i) => (i !== 0 ? `${accum}, ${curr}` : `${curr}`);
    const renderSugestion = (props) => <ItemMovie key={props.id} {...props} />;

    return (
        <div className="bg-gradient-to-b from-black via-black to-gray-900 min-h-screen">
            <div className="movie-cover">
                <span className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute z-10" />
                <img
                    className="w-full h-full object-cover object-top"
                    src={movie.large_screenshot_image1}
                    alt={movie.id}
                />
            </div>
            <div className="container mx-auto flex flex-wrap px-6 md:px-0">
                <div className="md:w-2/3 w-full">
                    <h1 className="text-5xl text-white leading-none tracking-wide pb-4">
                        {movie.title_long}
                    </h1>
                    <p className="text-lg lg:h-64 font-light text-white tracking-normal">
                        {movie.description_full}
                    </p>
                </div>
                <div className="md:w-1/3 w-full pt-8 md:pl-10 md:pt-16 leading-snug">
                    {movie?.genres && (
                        <p className="text-base font-thin text-white tracking-wider">
                            Genero:{' '}
                            <span className="font-normal">{movie.genres.reduce(genres, '')}</span>
                        </p>
                    )}
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                {suggestions.map(renderSugestion)}
            </div>
        </div>
    );
};

export default Movie;
