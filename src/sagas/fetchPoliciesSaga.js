import { call, put, takeEvery } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import {
  types,
  fetchPoliciesRequest,
  fetchPoliciesSuccess,
  fetchPoliciesFailure,
} from 'actions'

function getPolicies(searchCriteria) {
  // console.log(searchCriteria)

  if (searchCriteria.monthlyPremium) {
    searchCriteria.monthlyPremium = {
      $lt: parseFloat(searchCriteria.monthlyPremium),
    }
  }

  console.log(searchCriteria)

  return fetch('http://localhost:4000/policies/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchCriteria),
  }).then(response => response.json())
}

function* perform(action) {
  yield put(fetchPoliciesRequest())

  try {
    const response = yield call(getPolicies, action.payload.searchCriteria)
    yield put(fetchPoliciesSuccess(response))
    window.location.assign('#/results')
  } catch (error) {
    yield put(fetchPoliciesFailure(error))
  }
}

export default function* watchFetchPolicies() {
  yield takeEvery(types.POLICIES.FETCH_POLICIES, perform)
}
