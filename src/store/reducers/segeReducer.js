import { ACTIONS } from "../actions/actions";

const initialState = {
    moviesS: {},
    seriesS: {},
    selectedMovie: {}

}

export const sagaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.MOVIES.GET_MOVIES_SAGA_SUCSEES:
            // console.log("movies", movies)
            return {
                ...state, moviesS: action.payload

            }
        case ACTIONS.SERIES.GET_SERIES_SAGA_SUCSEES:
            // console.log("movies", movies)
            return {
                ...state, seriesS: action.payload

            }

        case ACTIONS.ITEM.GET_ITEM_DETAILS_SUCSEES:
            // console.log("movies", movies)
            return {
                ...state, selectedMovie: action.payload

            }
        case ACTIONS.ITEM.REMOVE_SELECTED_MOVIE:
            // console.log("movies", movies)
            return {
                ...state, selectedMovie: {}

            }

        default:
            return state
    }

}