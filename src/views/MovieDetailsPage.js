import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { movieDetailsApi } from '../services/moviesApi';
import MovieDetails from '../components/MovieDetails';
import Loader from '../components/Loader';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await movieDetailsApi(movieId);
        setMovie(data);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId, error]);

  return (
    <>
      <MovieDetails movie={movie} />
      {error && toast.error(error.message)}
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
