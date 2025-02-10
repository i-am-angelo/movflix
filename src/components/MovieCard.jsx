// Import PropTypes for type-checking props
import PropTypes from "prop-types";

// Define the MovieCard component
const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card">
      {/* Display the movie poster or a placeholder image if no poster is available */}
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />

      <div className="mt-4">
        {/* Display the movie title */}
        <h3>{title}</h3>

        <div className="content">
          {/* Display the movie rating */}
          <div className="rating">
            <img src="/star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          <span>•</span>

          {/* Display the original language of the movie */}
          <p className="lang">{original_language}</p>

          <span>•</span>

          {/* Display the release year of the movie */}
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

// Define prop types for the MovieCard component
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    original_language: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
