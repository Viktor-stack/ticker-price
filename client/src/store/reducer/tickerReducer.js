import {UPDATE_TICKER, UPDATE_TICKER_OLD} from "../actions/actions";

const initialState = {
    ticker: [],
    tickerOld: []
}


export default function tickerReducer(state, action) {
    if (typeof state === "undefined") {
        return initialState
    }

    switch (action.type) {
        case UPDATE_TICKER:
            state.ticker = [...action.update[0]]
            break
        case UPDATE_TICKER_OLD:
            state.tickerOld = [...state.ticker]
            break
        default:
            break
    }
    return state
}
