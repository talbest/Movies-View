import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../movieCard/movieCard';
import { ACTIONS } from '../../store/actions/actions';
import "./movieListing.scss"


const MovieListing = () => {

    const dispatch = useDispatch()
    useEffect(() => {



        dispatch(getMoviesHelperSaga())
        dispatch(getSeriesHelperSaga())
        // fetchMovies();

    }, []);

    const movies = useSelector(state => state.sagaReducer.moviesS)
    const series = useSelector(state => state.sagaReducer.seriesS)
    let renderMovies = ""
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })) :
        (<div className='movies-error'><h3>{movies.error}</h3></div>)

    let renderShows = ""
    renderShows = series.Response === "True" ? (
        series.Search.map((show, index) => {
            return <MovieCard key={index} data={show} />
        })) :
        (<div className='movies-error'><h3>{series.error}</h3></div>)

    return (
        <div>
            <div className='movies-wrapper'>
                <div className='movie-list'>
                    <h2>movies</h2>
                    <div className='movie-container'>
                        {renderMovies}
                    </div>
                </div>
            </div>
            <div className='movies-wrapper'>
                <div className='movie-list'>
                    <h2>Shows</h2>
                    <div className='movie-container'>
                        {renderShows}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MovieListing;

function getMoviesHelperSaga() {
    return { type: ACTIONS.MOVIES.GET_MOVIES_SAGA, }
}
function getSeriesHelperSaga() {
    return { type: ACTIONS.SERIES.GET_SERIES_SAGA, }
}