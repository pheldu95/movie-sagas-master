import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';




class Details extends Component {
   
    movie = () =>{
        console.log(this.props.reduxState.movieForDetailsPage[0]);
        
    }
    render() {
        // let movie = this.props.reduxState.movieForDetailsPage[0];
        // console.log('dads', this.props.reduxState.movieForDetailsPage);
        
        return (
            <div>
                {/* waits for movieForDetailsPage to exist before appending it */}
                {this.props.reduxState.movieForDetailsPage[0]&&
                    <>
                        <h1>{this.props.reduxState.movieForDetailsPage[0].title}</h1>
                        <img alt = 'movie details page' src = {this.props.reduxState.movieForDetailsPage[0].poster}></img> 
                        <p>{this.props.reduxState.movieForDetailsPage[0].description}</p>   
                    </>
                }
                <button onClick={this.movie}>sdadas</button>
                
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);