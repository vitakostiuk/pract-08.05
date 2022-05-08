import { FilmGalleryItem } from "../FilmGalleryItem/FilmGalleryItem";
import PropTypes from "prop-types";

export const FilmGallery = ({ movies, onToggleWatched }) => (
  <ul>
    {movies.map(({ id, title, img, isWatched }) => (
      <FilmGalleryItem
        key={id}
        id={id}
        title={title}
        img={img}
        isWatched={isWatched}
        onToggleWatched={onToggleWatched}
      />
    ))}
  </ul>
);

FilmGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  onToggleWatched: PropTypes.func.isRequired,
};
