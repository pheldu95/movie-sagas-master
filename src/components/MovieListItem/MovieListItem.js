import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieListItem.css';
import {withRouter} from 'react-router-dom';


class MovieListItem extends Component {

    goToDetails = (movie) =>{
        try{
            this.props.dispatch({type:'MOVIE_FOR_DETAILS', payload: movie.movie_id})
        }
        catch(err){
            console.log(err);
        }
        finally{
            this.props.history.push(`/details/${movie.movie_id}`);
        }
    }
    render() {
        return (
            <div className='movie'>
                <img alt='movie poster' src={this.props.movie.poster} width='200px' onClick={(event) => this.goToDetails(this.props.movie)}/>
                
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

//use withRouter so we can do this.props.history.push('details')
export default withRouter(connect(mapReduxStateToProps)(MovieListItem));