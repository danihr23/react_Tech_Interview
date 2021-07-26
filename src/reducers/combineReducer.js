
import{combineReducers} from 'redux'

import {commentsReducer} from './commentsReducer'
import {gameReducers} from './gameReducers'


export const rootReducer = combineReducers({
    allCommnents: commentsReducer,
    game: gameReducers,
})