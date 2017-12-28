import { all } from 'redux-saga/effects'
import fetchPoliciesSaga from './fetchPoliciesSaga'

export default function* rootSaga() {
  yield all([fetchPoliciesSaga()])
}
