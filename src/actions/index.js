export const types = {
  POLICIES: {
    FETCH_POLICIES: 'FETCH_POLICIES',
    FETCH_POLICIES_REQUEST: 'FETCH_POLICIES_REQUEST',
    FETCH_POLICIES_SUCCESS: 'FETCH_POLICIES_SUCCESS',
    FETCH_POLICIES_FAILURE: 'FETCH_POLICIES_FAILURE',
    SELECT_POLICY: 'SELECT_POLICY',
  },
}

export const fetchPolicies = (searchCriteria) => ({
  type: types.POLICIES.FETCH_POLICIES,
  payload: {
    searchCriteria,
  },
})

export const fetchPoliciesRequest = () => ({
  type: types.POLICIES.FETCH_POLICIES_REQUEST,
  payload: {},
})

export const fetchPoliciesSuccess = (policies) => ({
  type: types.POLICIES.FETCH_POLICIES_SUCCESS,
  payload: {
    policies,
  },
})

export const fetchPoliciesFailure = (error) => ({
  type: types.POLICIES.FETCH_POLICIES_FAILURE,
  payload: {
    error,
  },
})

export const selectPolicy = (policy) => ({
  type: types.POLICIES.SELECT_POLICY,
  payload: {
    policy,
  },
})
