import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  listPostDetails,
  updatePost,
} from "../../features/actions/postActions";
import {
  POST_DETAILS_REQUEST,
  POST_UPDATE_RESET,
} from "../../features/constants/postConstants";

function NormalPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");

  const [isPoll, setIsPoll] = useState(false);

  const getId = useParams();
  const postId = getId.id;

  const postUpdate = useSelector((state) => state.postUpdate);
  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = postUpdate;

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, post, error } = postDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // product detail dispatch
  useEffect(() => {
    // CHECK IF PRODUCT WAS UDPATED
    if (successUpdate) {
      dispatch({ type: POST_UPDATE_RESET });
      dispatch({ type: POST_DETAILS_REQUEST });
      navigate("/");
    } else {
      if (!post.title || post._id !== Number(postId)) {
        dispatch(listPostDetails(postId));
      } else {
        setTitle(post.title);
        setContent(post.content);
        setType(post.type);
        setLink(post.link);
        setIsPoll(post.is_poll);
      }
    }
  }, [dispatch, post, postId, navigate, successUpdate]);

  /* HANDLERS */

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updatePost({
        _id: postId,
        title,
        content,
        type,
        link,
        isPoll,
      })
    );

    // DISPATCH TO UDPATE PRODUCT
  };

  return <div>NormalPost</div>;
}

export default NormalPost;
