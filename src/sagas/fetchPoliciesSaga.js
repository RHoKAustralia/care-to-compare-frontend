import { call, put, takeEvery } from 'redux-saga/effects'

import {
  types,
  fetchPolicies,
  fetchPoliciesRequest,
  fetchPoliciesSuccess,
  fetchPoliciesFailure,
} from 'actions'

function getPolicies() {
  return Promise.resolve([])
}

function* perform(action) {
  yield put(fetchPoliciesRequest())

  try {
    const response = yield call(getPolicies)
    yield put(fetchPoliciesSuccess(response))
  }
  catch (error) {
    yield put(fetchPoliciesFailure(error))
  }
}

export default function* watchFetchPolicies() {
  yield takeEvery(types.POLICIES.FETCHING_POLICIES, perform)
}
