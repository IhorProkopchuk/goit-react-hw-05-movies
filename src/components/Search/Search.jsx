import PropTypes from 'prop-types';
import { useState } from 'react';
import { Loader } from '../Loader/Loader';

const Search = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (!query) {
      window.alert('Search query cannot be empty');
      return;
    }

    setLoading(true);

    try {
      await onSubmit(query);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    evt.target.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: '20px', marginLeft: '20px' }}
      >
        <input name="query" type="text" style={{ width: '200px' }} />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}{' '}
    </>
  );
};

Search.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Search;
