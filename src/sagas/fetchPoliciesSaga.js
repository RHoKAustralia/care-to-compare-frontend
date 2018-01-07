import { call, put, takeEvery } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import {
  types,
  fetchPoliciesRequest,
  fetchPoliciesSuccess,
  fetchPoliciesFailure,
} from 'actions'
import fakeSearchResults from 'data/fakePolicySearchResults'

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
  }).then((response) => response.json())
}

function* perform(action) {
  yield put(fetchPoliciesRequest())

  try {
    const response = yield call(getPolicies, action.payload.searchCriteria)
    console.log(response)
    yield put(fetchPoliciesSuccess(response))
    window.location.assign('#/results')
  } catch (error) {
    // TODO: Delete this - see comment in data/fakePolicySearchResults
    if (window.location.href.includes('github.io')) {
      yield put(fetchPoliciesSuccess(fakeSearchResults))
      window.location.assign('#/results')
    } else {
      yield put(fetchPoliciesFailure(error))
    }
  }
}

export default function* watchFetchPolicies() {
  yield takeEvery(types.POLICIES.FETCH_POLICIES, perform)
}
