export const UPDATE_TICKER = "UPDATE_TICKER"
export const UPDATE_TICKER_OLD = "UPDATE_TICKER_OLD"
export const UPDATE_COLOR = "UPDATE_COLOR"

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

export function updateColor() {
    return {
        type: UPDATE_COLOR,
    }
}
