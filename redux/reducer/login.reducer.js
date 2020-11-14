const initialState = { id: null }

function reducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'SET_ID':
                nextState = {
                    id:  action.value
                }

            return nextState || state
        default:
            return state
    }
}


export  default reducer