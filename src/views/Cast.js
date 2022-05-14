import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { movieCreditsApi } from '../services/moviesApi';
import CastList from '../components/CastList';
import Loader from '../components/Loader';
import Text from '../components/Text';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      setLoading(true);
      try {
        const data = await movieCreditsApi(movieId);
        setCast(data.cast);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCredits();
  }, [movieId, error]);

  return (
    <>
      {cast.length > 0 ? (
        <CastList cast={cast} />
      ) : (
        <Text text="We don't have any cast for this movie." />
      )}
      {error && toast.error(error.message)}
      {loading && <Loader />}
    </>
  );
}
