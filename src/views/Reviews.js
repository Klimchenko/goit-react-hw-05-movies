import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { movieReviewsApi } from '../services/moviesApi';
import { useParams } from 'react-router-dom';
import ReviewsList from '../components/ReviewsList';
import Loader from '../components/Loader';
import Text from '../components/Text';

export default function Reviews() {
  const { movieId } = useParams();
  const [page] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setLoading(true);
      try {
        const { results } = await movieReviewsApi(movieId, page);
        setReviews(results);

        page === 1
          ? setReviews(results)
          : setReviews(movies => [...movies, ...results]);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId, page, error]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <Text text="We don't have any reviews for this movie." />
      )}
      {error && toast.error(error.message)}
      {loading && <Loader />}
    </>
  );
}
