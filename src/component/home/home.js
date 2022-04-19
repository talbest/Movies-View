import React, { useEffect } from 'react';
import MovieListing from '../movieListing/movieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/movieApiKey';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../../store/actions/actions';

const Home = () => {


    return (
        <div>
            <div className='banner-image'></div>
            <MovieListing />
        </div>

    );
};

function getMoviesHelper(movies) {
    return { type: ACTIONS.MOVIES.GET_MOVIES, payload: movies }
}
// function getMoviesHelperSaga() {
//     return { type: ACTIONS.MOVIES.GET_MOVIES_SAGA, }
// }

export default Home;