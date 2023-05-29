import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPageComponent = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleChange = e => {
    if (e.currentTarget.value === '') {
      return setSearchParams({});
    }
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery(searchParams.get('query'));
    onHandleSubmit(query);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default MoviesPageComponent;
