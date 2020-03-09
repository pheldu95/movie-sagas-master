import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';



class Details extends Component {
   
    
    backButton = () =>{
        this.props.history.push('/');
    }
    editMovie = () =>{
        this.props.history.push('/edit');     
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
                        <button onClick={(event)=>this.editMovie(this.props.reduxState.movieForDetailsPage)}>Edit</button> 
                    </>

                }
                <button onClick={this.backButton}>Back</button>
                
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(Details));