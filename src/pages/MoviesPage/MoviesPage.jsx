import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/API';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    useEffect(() => {
        if (query) {
            searchMovies(query).then(setMovies);
        }
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newQuery = form.elements.search.value.trim();

        if (newQuery === '') {
            alert('Please enter a valid search query');
            return;
        }

        setSearchParams({ query: newQuery });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    defaultValue={query}
                    placeholder="Search movies"
                />
                <button type="submit">Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
};

export default MoviesPage;