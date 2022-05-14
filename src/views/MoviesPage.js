import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { searchMovieApi } from '../services/moviesApi';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader';
import LoadMore from '../components/LoadMore';
import Searchbar from '../components/Searchbar';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const urlSearchParams = new URLSearchParams(location.search).get('searchBy');

  useEffect(() => {
    if (urlSearchParams !== '' && !query) {
      setQuery(urlSearchParams);
      return;
    }

    const fetchMoviesByQuery = async () => {
      setLoading(true);
      try {
        const { results, total_pages, total_results } = await searchMovieApi(
          query,
          page,
        );
        page === 1
          ? setMovies(results)
          : setMovies(movies => [...movies, ...results]);
        total_pages === page ? setShowButton(false) : setShowButton(true);

        if (total_results === 0) {
          setShowButton(false);
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.',
            {
              theme: 'colored',
              autoClose: 3000,
            },
          );
          return;
        }

        if (page === Math.ceil(total_results / 20)) {
          toast("We're sorry, but you've reached the end of search results.", {
            autoClose: 3000,
          });
        }

        if (page === 1) {
          toast.success(`Hooray! We found ${total_results} movies.`, {
            theme: 'colored',
            autoClose: 3000,
          });
        }
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesByQuery();
  }, [page, urlSearchParams, query, error]);

  const handleFormSubmit = query => {
    navigate({ ...location, search: `searchBy=${query}` });
    setQuery(query);
    setPage(1);
  };
  const handelLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && toast.error(error.message)}
      {loading ? (
        <Loader />
      ) : (
        showButton && <LoadMore onloadMore={handelLoadMore} />
      )}
    </div>
  );
}
