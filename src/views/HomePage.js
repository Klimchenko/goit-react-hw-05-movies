import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { trendingMovieApi } from '../services/moviesApi';
import Title from '../components/Title';
import LoadMore from '../components/LoadMore';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesTrending = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await trendingMovieApi(page);
        total_pages === page ? setShowButton(false) : setShowButton(true);
        page === 1
          ? setMovies(results)
          : setMovies(movies => [...movies, ...results]);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesTrending();
  }, [page, error]);

  const handelLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      <Title text="Trending today" />
      {movies && <MovieList movies={movies} />}
      {error && toast.error(error.message)}
      {loading ? (
        <Loader />
      ) : (
        showButton && <LoadMore onloadMore={handelLoadMore} />
      )}
    </>
  );
}
