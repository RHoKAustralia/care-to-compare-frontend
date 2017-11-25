export const types = {
  EXAMPLES: {
    EXAMPLE_ACTION: 'EXAMPLE_ACTION',
  },
  POLICIES: {
    FETCHING_POLICIES: 'FETCHING_POLICIES',
    FETCHING_POLICIES_REQUEST: 'FETCHING_POLICIES_REQUEST',
    FETCHING_POLICIES_SUCCESS: 'FETCHING_POLICIES_SUCCESS',
    FETCHING_POLICIES_FAILURE: 'FETCHING_POLICIES_FAILURE',
  }
}

export const creators = {
  example: (payload) => ({
    type: types.EXAMPLES.EXAMPLE_ACTION,
    payload: {
      message: 'HELLO',
    },
  }),
}

export const fetchPolicies = searchCriteria => ({
  type: types.POLICIES.FETCHING_POLICIES,
  payload: {
    searchCriteria,
  }
})

export const fetchPoliciesRequest = () => ({
  type: types.POLICIES.FETCHING_POLICIES_REQUEST,
  payload: {},
})

export const fetchPoliciesSuccess = (policies) => ({
  type: types.POLICIES.FETCHING_POLICIES_SUCCESS,
  payload: {
    policies,
  },
})

export const fetchPoliciesFailure = (error) => ({
  type: types.POLICIES.FETCHING_POLICIES_FAILURE,
  payload: {
    error,
  },
})
