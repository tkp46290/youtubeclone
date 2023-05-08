// import { configureStore } from '@reduxjs/toolkit'
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducers } from "./reducers/auth.reducers";

import {
  homeVideosReducers,
  relatedVideoReducer,
  searchedVideosReducer,
  subscriptionsChannelReducer,
  channelVideosReducer,
  selectedVideoReducer
  
} from "./reducers/video.reducers";

import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'

const rootReducers = combineReducers({
  auth: authReducers,
  homeVideos: homeVideosReducers,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,

  channelVideos: channelVideosReducer,
});

const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
