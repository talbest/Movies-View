import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from '../store/actions/actions';
import movieApi from '../common/apis/movieApi';
import { APIKEY } from '../common/apis/movieApiKey';


function* getMoviesFetch() {
    const movies = yield call(getMoviesSaga)
    yield put({ type: ACTIONS.MOVIES.GET_MOVIES_SAGA_SUCSEES, payload: movies })
}

function* getSeriesFetch() {
    const series = yield call(getShowsSaga)
    yield put({ type: ACTIONS.SERIES.GET_SERIES_SAGA_SUCSEES, payload: series })
}

function* getItemFetch(payload) {
    const itmeDetails = yield call(getItemDetailsSaga, payload)
    yield put({ type: ACTIONS.ITEM.GET_ITEM_DETAILS_SUCSEES, payload: itmeDetails })
}


async function getMoviesSaga() {
    const movieText = "spider"
    const response = await movieApi.get(
        `?apikey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((err) => {
            console.log("error", err);
        })
    return response.data

}

async function getShowsSaga() {
    const ShowText = "games"
    const response = await movieApi.get(
        `?apikey=${APIKEY}&s=${ShowText}&type=series`)
        .catch((err) => {
            console.log("error", err);
        })
    return response.data

}

async function getItemDetailsSaga(action) {
    const response = await movieApi.get(
        `?apikey=${APIKEY}&i=${action.payload}&plot=full`)
        .catch((err) => {
            console.log("error", err);
        })
    return response.data

}

function* mySaga() {
    yield takeEvery(ACTIONS.MOVIES.GET_MOVIES_SAGA, getMoviesFetch);
    yield takeEvery(ACTIONS.SERIES.GET_SERIES_SAGA, getSeriesFetch);
    yield takeEvery(ACTIONS.ITEM.GET_ITEM_DETAILS, getItemFetch);

}

export default mySaga

