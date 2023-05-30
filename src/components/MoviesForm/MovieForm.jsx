import { useState } from 'react';

const MoviesPageComponent = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    if (e.currentTarget.value === '') return;
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') return;
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
