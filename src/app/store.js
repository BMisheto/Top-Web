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
  postMyListReducer,
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
  donationMyListReducer,
  donationUpdateReducer,
} from "../features/reducers/donationReducers";
import {
  eventCreateReducer,
  eventDeleteReducer,
  eventDetailsReducer,
  eventListReducer,
  eventMyListReducer,
  eventUpdateReducer,
} from "../features/reducers/eventsReducers";
import {
  attendingAddReducer,
  attendingListReducer,
  attendingRemoveReducer,
} from "../features/reducers/attendingReducers";

/* COMBINED REDUCER */
const reducer = combineReducers({
  postList: postListReducer,
  postMyList: postMyListReducer,
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
  donationMyList: donationMyListReducer,
  donationDetails: donationDetailsReducer,
  donationDelete: donationDeleteReducer,
  donationCreate: donationCreateReducer,
  donationUpdate: donationUpdateReducer,

  eventList: eventListReducer,
  eventMyList: eventMyListReducer,
  eventDetails: eventDetailsReducer,
  eventDelete: eventDeleteReducer,
  eventCreate: eventCreateReducer,
  eventUpdate: eventUpdateReducer,

  attendingList: attendingListReducer,
  attendingAdd: attendingAddReducer,
  
  attendingRemove: attendingRemoveReducer,

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
