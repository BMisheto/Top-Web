/* REDUX */
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";
import {
  postCommentCreateReducer,
  postCreateReducer,
  postDeleteReducer,
  postDetailsReducer,
  postListReducer,
  postUpdateReducer,
} from "../features/reducers/postReducers";
import {
  commentCreateReducer,
  commentDeleteReducer,
  commentDetailsReducer,
  commentListReducer,
  commentUpdateReducer,
} from "../features/reducers/commentReducers";
import {
  pollCreateReducer,
  pollDeleteReducer,
  pollDetailsReducer,
  pollListReducer,
  pollUpdateReducer,
  pollVoteReducer,
} from "../features/reducers/pollReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userEmailCheckReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userResetPasswordReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "../features/reducers/userReducers";
import {
  donationCreateReducer,
  donationDeleteReducer,
  donationDetailsReducer,
  donationListReducer,
  donationUpdateReducer,
} from "../features/reducers/donationReducers";
import {
  eventCreateReducer,
  eventDeleteReducer,
  eventDetailsReducer,
  eventListReducer,
  eventUpdateReducer,
} from "../features/reducers/eventsReducers";

/* COMBINED REDUCER */
const reducer = combineReducers({
  postList: postListReducer,
  postDetails: postDetailsReducer,
  postDelete: postDeleteReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
  postCommentCreate: postCommentCreateReducer,

  commentList: commentListReducer,
  commentDetails: commentDetailsReducer,
  commentDelete: commentDeleteReducer,
  commentCreate: commentCreateReducer,
  commentUpdate: commentUpdateReducer,

  pollList: pollListReducer,
  pollDetails: pollDetailsReducer,
  pollDelete: pollDeleteReducer,
  pollCreate: pollCreateReducer,
  pollUpdate: pollUpdateReducer,
  pollVote: pollVoteReducer,

  donationList: donationListReducer,
  donationDetails: donationDetailsReducer,
  donationDelete: donationDeleteReducer,
  donationCreate: donationCreateReducer,
  donationUpdate: donationUpdateReducer,

  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  eventDelete: eventDeleteReducer,
  eventCreate: eventCreateReducer,
  eventUpdate: eventUpdateReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfle: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  userEmailCheck: userEmailCheckReducer,
  userPasswordReset: userResetPasswordReducer,

});

/* PULLING DATA OUT OF LOCAL STORAGE AND LOAD IT INTO INITIAL STATE */
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;