import fetchPoliciesSaga from './fetchPoliciesSaga'

export default function* rootSaga() {
  yield [fetchPoliciesSaga()]
}
