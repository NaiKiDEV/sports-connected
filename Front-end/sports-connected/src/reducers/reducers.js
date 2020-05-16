import isLoggedReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    user: isLoggedReducer
})

export default allReducers;