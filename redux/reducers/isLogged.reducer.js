const initialState = { isLoggedIn: false }

function isLogged(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'LOGIN':
            nextState = {
                isLoggedIn:  action.value
            }

            return nextState || state
        default:
            return state
    }
}

export default isLogged