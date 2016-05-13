import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import podcasts from './modules/podcasts'

export default combineReducers({
  podcasts,
  router
})
