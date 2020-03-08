import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    //run getMovies when GET_MOVIES dispatch is recieved
    yield takeEvery('GET_MOVIES', getMovies)
    yield takeEvery('MOVIE_FOR_DETAILS', getMovieForDetails)

}

function* getMovies(){
    //go to movies router and get all the movies
    let movieArray = [];
    yield axios({
        method: 'GET',
        url: '/api/movies'
    }).then((response)=>{
        console.log('back with movies from get request:', response.data);  
        movieArray = response.data;
    }).catch((error)=>{
        console.log(error);  
    })
    yield put({type:'SET_MOVIES', payload: movieArray}); 
}

function* getMovieForDetails(action){
    let movieId = action.payload;
    let movie = {};
    yield axios({
        method: 'GET',
        url: `/details/${movieId}`
    }).then((response)=>{
        console.log('back from details router with movie:', response.data);
        movie = response.data
    }).catch((error)=>{
        console.log(error);  
    })
    yield put({type:'SET_MOVIE_DETAILS', payload: movie})
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movieForDetailsPage = (state = {}, action) => {
    switch(action.type){
        case 'SET_MOVIE_DETAILS':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieForDetailsPage
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
