import { takeLatest, put, call } from 'redux-saga/effects'
import { createtPostInAPI } from '../../services/posts'

function* createPost(action) {
  yield put({ type: 'CREATE_POST_PENDING' })

  try {
    const newPost = yield call(createtPostInAPI, action.payload)
    yield put({ type: 'CREATE_POST_SUCCESS', payload: newPost })
  } catch (error) {
    yield put({ type: 'CREATE_POST_FAILURE' })
    console.error(error) // eslint-disable-line
  }
}

export default function* watchCreatePost() {
  yield takeLatest('CREATE_POST', createPost)
}