import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/API';
import styles from './MovieCast.module.css';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieCast(movieId).then(setCast);
    }, [movieId]);

    return (
        <ul className={styles.castList}>
            {cast.map(actor => (
                <li key={actor.id} className={styles.castItem}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        className={styles.actorImage}
                    />
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                </li>
            ))}
        </ul>
    );
};

export default MovieCast;