import {combineReducers} from 'redux'
import apartmentsReducer from './apartments'

const rootReducer = combineReducers({
    apartments: apartmentsReducer,
})

export default rootReducer