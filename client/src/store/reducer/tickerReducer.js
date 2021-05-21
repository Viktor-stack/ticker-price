import {UPDATE_COLOR, UPDATE_TICKER, UPDATE_TICKER_OLD} from "../actions/actions";

const initialState = {
    ticker: [],
    tickerOld: [],
    colorList: {red: "redText", green: "greenText"}
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
        //     // case UPDATE_COLOR:
        //     // state.ticker.map((i, index) => {
        //     //     if (state.ticker.)
        //     //     if (state.ticker[index].price > state.tickerOld[index].price) {
        //     //         state.ticker[index] = Object.keys(i.color = state.colorList.green)
        //     //     } else if (state.ticker[index].price < state.tickerOld[index].price) {
        //     //         state.ticker[index] = Object.keys(state.colorList.red)
        //     //     }
        //     // })
        //
        //
        //     break
        default:
            break
    }
    return state
}
