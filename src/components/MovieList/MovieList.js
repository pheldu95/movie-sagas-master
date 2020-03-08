import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem'
import './MovieList.css';


class MovieList extends Component {

    componentDidMount = () => {
        this.getMovies();
    }

    getMovies = () => {
      this.props.dispatch({type:'GET_MOVIES'});
       
    }


    render() {
        return (
            <div>
                <h1>Movies</h1><br />
                <div className = "moviesDisplay">
                    {this.props.reduxState.movies.map((movie) => {
                        return (
                            <MovieListItem key={movie.movie_id} movie={movie}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);