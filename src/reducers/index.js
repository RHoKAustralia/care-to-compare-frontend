import { types } from 'actions'

export default (state = {}, action) => {
  switch(action.type) {
    case types.EXAMPLES.EXAMPLE_ACTION:
      return {
        ...state,
        example: action.payload.message,
      }
    default:
      return state
  }
}
