import React, { Component } from 'react';
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {


  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  }

  render() {
    return (
      <li className="list-group-item ">
        <div class="card">
          <div class="card-header">
          { this.props.movie.title }
        </div>
        <div class="card-body">
        <img alt="film" width="185" src={ this.props.movie.img } />
        <h5 class="card-title" className="m-100">{ this.props.movie.details }</h5>
        <p class="card-text" className="m-100" >{ this.props.movie.description }</p>
        <div className="d-flex flex-row justify-content-end">
            { this.props.isFavori ? (
              <button onClick={ () => {this.props.removeFavori(this.props.movie.title) }} className="btn btn-small btn-danger">Remove</button>
            ) : (
              <button onClick={ () => {this.props.addFavori(this.props.movie.title) }} className="btn btn-small btn-primary">Add</button>
            ) }       
        </div> 
        </div>
      </div>
      </li>
    );
    
  }

}