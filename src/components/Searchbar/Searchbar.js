import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdMovieFilter } from 'react-icons/md';
import { Form, Button, Input } from './Searchbar.styled';

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error(
        'Sorry, there are no movies matching your search query. Please try again.',
        {
          theme: 'colored',
          autoClose: 3000,
        },
      );
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        name="query"
        value={query}
        onChange={handleChange}
        placeholder="Search movies"
      />

      <Button type="submit">
        <MdMovieFilter style={{ color: '#000', width: 35, height: 35 }} />
        Search
      </Button>
    </Form>
  );
}
