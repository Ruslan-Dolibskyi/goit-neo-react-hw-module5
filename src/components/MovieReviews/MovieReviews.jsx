import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/API';
import styles from './MovieReviews.module.css';

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <ul className={styles.reviewsList}>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <li key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                ))
            ) : (
                <p>We don't have any reviews for this movie.</p>
            )}
        </ul>
    );
};

export default MovieReviews;