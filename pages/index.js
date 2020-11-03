import React, { useEffect, useState } from 'react';
import { getMovieList } from '../services/movies';
import ItemMovie from '../molecules/ItemMovie';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovieList().then(setMovies);
    }, []);

    const renderList = (props) => <ItemMovie key={props.id} {...props} />;

    return (
        <div className="bg-gradient-to-t from-black via-black to-indigo-900 px-4 py-4 text-lg grid sm:grid-cols-2 lg:grid-cols-3 min-h-screen">
            {movies.map(renderList)}
        </div>
    );
};

export default Home;
