import React, { Component } from "react";
import { mapper } from "./utils/mapper";
import movies from "./data/data.json";
import { Button } from "./Button/Button";
import { FilmGallery } from "./FilmGallery/FilmGallery";

import "./App.css";

class App extends Component {
  state = {
    movies: mapper(movies),
    isShown: false,
  };

  onToggleFilms = () => {
    this.setState((prevState) => ({ isShown: !prevState.isShown }));
  };

  onToggleWatched = (id) => {
    this.setState((prevState) => ({
      movies: prevState.movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, isWatched: !movie.isWatched };
        }
        return movie;
      }),
    }));
  };

  render() {
    const { movies, isShown } = this.state;
    return (
      <>
        <Button onToggle={this.onToggleFilms} isShown={isShown} />
        {isShown && (
          <FilmGallery movies={movies} onToggleWatched={this.onToggleWatched} />
        )}
      </>
    );
  }
}

export default App;
