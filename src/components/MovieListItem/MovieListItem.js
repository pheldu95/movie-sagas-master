import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieListItem.css';



class MovieListItem extends Component {

    goToDetails = (movie) =>{
        this.props.history.push('/animals')
        
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

export default connect(mapReduxStateToProps)(MovieListItem);