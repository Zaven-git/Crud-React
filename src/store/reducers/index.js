import { combineReducers } from 'redux'

import { images } from './images'

export const rootReducer = combineReducers({
  images: images,
})