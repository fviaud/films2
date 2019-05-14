import React, { Component } from 'react';
import MovieElement from './MovieElement/MovieElement';

export default class MovieList extends Component {
  render() {
    return (
        <ul className="list-group list-group-flush">
        { this.props.movies.map( (m, index) => (
          <MovieElement 
            key={ m.title + index } 
            movie={ m } 
            isFavori={ this.props.favoris.includes(m.title) }
            addFavori={ this.props.addFavori }
            removeFavori={ this.props.removeFavori }
            updateSelectedMovie={ () => { this.props.updateSelectedMovie(index) } } 
          />
        ))}
       </ul>
    );
  }

}