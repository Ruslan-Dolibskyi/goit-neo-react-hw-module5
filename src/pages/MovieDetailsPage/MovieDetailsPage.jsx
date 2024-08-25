import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/API';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const previousLocation = useRef(location.state?.from || '/movies');

    useEffect(() => {
        getMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) return null;

    const { title, overview, genres, poster_path, vote_average } = movie;

    return (
        <div className={styles.container}>
            <button onClick={() => navigate(previousLocation.current)}>Go back</button>
            <div className={styles.movieDetails}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className={styles.poster}
                />
                <div className={styles.info}>
                    <h2>{title} ({movie.release_date.slice(0, 4)})</h2>
                    <p>User Score: {vote_average * 10}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres.map(genre => genre.name).join(', ')}</p>
                </div>
            </div>
            <div className={styles.additionalInfo}>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;