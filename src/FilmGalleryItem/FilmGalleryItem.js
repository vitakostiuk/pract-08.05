import PropTypes from "prop-types";

export const FilmGalleryItem = ({
  id,
  title,
  img,
  isWatched,
  onToggleWatched,
}) => {
  return (
    <li id={id}>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} />
      <p onClick={() => onToggleWatched(id)}>Watched: {isWatched.toString()}</p>
    </li>
  );
};

FilmGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onToggleWatched: PropTypes.func.isRequired,
};
