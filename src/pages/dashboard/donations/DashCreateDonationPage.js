// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router';

// function DashCreateDonationPage() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
  
//     const [message, setMessage] = useState("");
//     const [errorMessage, setErrorMessage] = useState(false);
  
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [target, setTarget] = useState(0);
  
//     const [uploading, setUploading] = useState(false);
  
//     const [coverImage, setCoverImage] = useState("");
  
//     const [uploadingCover, setUploadingCover] = useState(false);
  
//     const getId = useParams();
//     const donationId = getId.id;
  
//     const donationUpdate = useSelector((state) => state.donationUpdate);
//     const {
//       success: successUpdate,
//       loading: loadingUpdate,
//       error: errorUpdate,
//     } = donationUpdate;
  
//     const donationDetails = useSelector((state) => state.donationDetails);
//     const { loading, donation, error } = donationDetails;
  
//     const userLogin = useSelector((state) => state.userLogin);
//     const { userInfo } = userLogin;
  
//     // product detail dispatch
//     useEffect(() => {
//       // CHECK IF PRODUCT WAS UDPATED
//       if (successUpdate) {
//         dispatch({ type: DONATION_UPDATE_RESETS });
//         dispatch({ type: DONATION_DETAILS_REQUEST });
//         navigate("/dashboard/donate/");
//       } else {
//         if (!donation.name || donation._id !== Number(donationId)) {
//           dispatch(listDonationDetails(donationId));
//         } else {
//           setName(donation.name);
//           setDescription(donation.description);
//           setTarget(donation.target);
  
//           setCoverImage(donation.donation_cover);
//         }
//       }
//     }, [dispatch, donation, donationId, navigate, successUpdate]);
  
//     /* HANDLERS */
  
//     const submitHandler = (e) => {
//       e.preventDefault();
  
//       dispatch(
//         updateDonation({
//           _id: donationId,
//           name,
//           description,
//           target,
  
//           coverImage,
//         })
//       );
//     };
  
//     // DISPATCH TO UDPATE PRODUCT
  
//     const coverImageUpload = async (e) => {
//       const file = e.target.files[0];
//       const formData = new FormData();
  
//       formData.append("image", file);
//       formData.append("donation_id", donationId);
  
//       setUploadingCover(true);
  
//       try {
//         const config = {
//           header: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${userInfo.token}`,
//           },
//         };
//         const { data } = await axios.post(
//           `${REACT_APP_URL}/donations/upload/cover/`,
//           formData,
//           config
//         );
//         setCoverImage(data);
//         setUploadingCover(false);
//       } catch (error) {
//         setUploadingCover(false);
//       }
//     };
//   return (
//     <div>DashCreateDonationPage</div>
//   )
// }

// export default DashCreateDonationPage