import { combineReducers } from 'redux'
import storeUserId from './storeUserId.reducer'
import isLogged from './isLogged.reducer'

export default combineReducers({
    storeUserId,
    isLogged
})