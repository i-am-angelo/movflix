import PropTypes from "prop-types";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <div>
        {/* Display the search icon */}
        <img src="/search.svg" alt="search" />

        {/* Input field for searching movies */}
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    </div>
  );
};

// Define prop types for the Search component
Search.propTypes = {
  search: PropTypes.string.isRequired, // The current search query
  setSearch: PropTypes.func.isRequired, // Function to update the search query
};

export default Search;
