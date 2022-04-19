import { ACTIONS } from "../actions/actions";

const initialState = {
    movies: {},
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.MOVIES.GET_MOVIES:
            // console.log("movies", movies)
            return {
                ...state,movies: action.payload

            }
        default:
            return state
    }

}