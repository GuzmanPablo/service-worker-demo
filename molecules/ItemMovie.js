import Link from 'next/link';
import React from 'react';

const ItemMovie = ({ id, title, year, large_cover_image, medium_cover_image }) => {
    const animation =
        'bg-black bg-opacity-50 hover:bg-opacity-0 hover:bg-gradient-to-b hover:from-transparent hover:to-black';

    return (
        <Link href={`/movie/${id}`} key={id}>
            <div className="w-full h-64 border border-transparent relative">
                <div
                    className={`h-full w-full flex flex-col justify-center items-left px-6 transition duration-300 absolute z-10 ${animation}`}>
                    <p className="text-white text-4xl pb-2 leading-none">{title}</p>
                    <p className="text-white text-lg leading-none">({year})</p>
                </div>
                <img
                    className="h-full w-full object-cover z-0"
                    src={large_cover_image || medium_cover_image}
                    alt={title}
                />
            </div>
        </Link>
    );
};

export default ItemMovie;
