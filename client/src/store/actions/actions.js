export const UPDATE_TICKER = "UPDATE_TICKER"
export const UPDATE_TICKER_OLD = "UPDATE_TICKER_OLD"

export function updateTicker(update) {
    return {
        type: UPDATE_TICKER,
        update
    }
}

export function updateTickerOld(update) {
    return {
        type: UPDATE_TICKER_OLD,
        update
    }

}

