import React, { Component } from 'react';
import Style from './FavoriElement.module.scss';

export default class FavoriElement extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div class="card">
          <div class="card-header">
          { this.props.favori.title }
          </div>
        <div class="card-body">
        <img alt="film" width="185" src={ this.props.favori.img }  />
        <h5 class="card-title" className="m-100">{ this.props.favori.details }</h5>
        <p class="card-text" className="m-100 flex-row " >{ this.props.favori.description }</p>
        <div className="d-flex flex-row justify-content-end">
          <button onClick={ () => {this.props.removeFavori(this.props.favori.title) }} className="btn btn-small btn-danger">Remove</button>
        </div>
        </div>
        </div>
      </li>
    );
    
  }

}