import { all } from 'redux-saga/effects'
import watchCreatePost from './post/createPost'
// import { watchFetchPostsIfNeeded, watchFetchPosts } from './posts/fetch'
// import watchDeletePost from './posts/delete'
// import watchUpdatePost from './posts/update'

export default function* rootSaga() {
  yield all([
    watchCreatePost(),
    // watchFetchPostsIfNeeded(),
    // watchFetchPosts(),
    // watchDeletePost(),
    // watchUpdatePost()
  ])
}