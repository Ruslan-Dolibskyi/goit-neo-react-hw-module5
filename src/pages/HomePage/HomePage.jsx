import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/API';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setMovies);
    }, []);

    return (
        <div className={styles.container}>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;