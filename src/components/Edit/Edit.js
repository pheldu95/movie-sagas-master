import React, { Component } from 'react';
import { connect } from 'react-redux';




class Details extends Component {
   state ={
       movieId: this.props.reduxState.movieForDetailsPage[0].id,
       title: this.props.reduxState.movieForDetailsPage[0].title,
       description: this.props.reduxState.movieForDetailsPage[0].description
   }
    handleChange = (event, type) =>{
        this.setState({
            [type]: event.target.value
        })
        console.log(this.state);
        
    }
    cancelEdit = () =>{
        this.setState({
            title: this.props.reduxState.movieForDetailsPage[0].title,
            description: this.props.reduxState.movieForDetailsPage[0].description
        })
        this.props.history.push('/details');
    }
    submitEdit = () =>{
        this.props.dispatch({type: 'EDIT_MOVIE', payload: this.state});
    }
    render() {
        return (
            <div>
               <h1>Edit Movie: {this.state.title}</h1>
                <div>
                    <input onChange={(event) => this.handleChange(event, 'title')} value={this.state.title}/>
                </div>
                <div>
                    <textarea onChange={(event) => this.handleChange(event, 'description')}value={this.state.description} rows='10' cols='80'/>
                </div>
                <button onClick={this.cancelEdit}>Cancel</button>
                <button onClick={this.submitEdit}>Save</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);