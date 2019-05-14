import React, { Component } from 'react';
import FavoriElement from './FavoriElement/FavoriElement';

export default class FavoriList extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush w-100">
        { this.props.favoris.map( (f, index) => (
          <FavoriElement 
            key={ f.title + index } 
            favori={ f } 
            removeFavori={ this.props.removeFavori }
          />
        ))}
      </ul>
    );
  }

}