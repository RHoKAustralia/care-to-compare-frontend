import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {types} from 'actions'

const initialState = {
  policySearch: {
    loading: false,
    errors: [],
    searchResults: [],
    selectedPolicy: null,
  }
}

const policySearch = (state = initialState.policySearch, action) => {
  switch (action.type) {
    case types.POLICIES.FETCH_POLICIES_REQUEST:
      return {
        ...state,
        loading: true,
        errors: [],
        searchResults: [],
        selectPolicy: null,
      }
    case types.POLICIES.FETCH_POLICIES_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        searchResults: action.payload.policies
      }
    case types.POLICIES.FETCH_POLICIES_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
        searchResults: []
      }
    case types.POLICIES.SELECT_POLICY:
      return {
        ...state,
        selectedPolicy: action.payload.policy,
      }
    default:
      return state
  }
}

export default combineReducers({
  policySearch,
  form: formReducer
})
