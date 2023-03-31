import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { listUserDetails } from '../../features/actions/userActions';

function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getId = useParams();
  const profileId = getId.id;


  const listUserDetails = useSelector((state) => state.listUserDetails);

  const { user, loading, error } = listUserDetails;


  useEffect(() => {
    dispatch(listUserDetails(profileId))
    
  }, [profileId])
  
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage