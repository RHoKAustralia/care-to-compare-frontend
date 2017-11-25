import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { types } from 'actions'

// export default (state = {}, action) => {
//   switch(action.type) {
//     case types.EXAMPLES.EXAMPLE_ACTION:
//       return {
//         ...state,
//         example: action.payload.message,
//       }
//     default:
//       return state
//   }
// }

export default combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})
