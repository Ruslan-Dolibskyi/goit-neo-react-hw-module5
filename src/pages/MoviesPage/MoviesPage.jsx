import { useState } from 'react';
import { searchMovies } from '../../api/API';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        searchMovies(query).then(setMovies);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies"
                />
                <button type="submit">Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
};

export default MoviesPage;