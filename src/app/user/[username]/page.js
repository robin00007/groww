"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Grid, UserCard } from "../../../components";
import styles from "../../../styles/userPage.module.css";

import userDetails from "../../../services/userDetails";
import userPhotos from "../../../services/userPhotos";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername, resetDetails, resetPage, resetPhotos} from "../../../redux/slice/feedSlice";
import {fetchUserDetails, fetchUserPhotos} from "../../../redux/action";
const UserPage = ({params}) => {

  const dispatch=useDispatch();

  const loader=useSelector(state=>state.feed.loader);
  const isLoading=useSelector(state=>state.feed.isLoading);
  const userDetails=useSelector(state=>state.feed.userDetails);
  const username=useSelector(state=>state.feed.username); 
  const userPhotos=useSelector(state=>state.feed.userPhotos);
  const photoCount=useSelector(state=>state.feed.photoCount);
  const error=useSelector(state=>state.feed.error);
  const pageNumber=useSelector(state=>state.feed.page);
  
  useEffect(()=>{
      if(pageNumber!==1){
        dispatch(resetPage());
      }
      dispatch(resetPhotos());
      dispatch(resetDetails());
  },[])

  useEffect(()=>{
    dispatch(changeUsername({username:params.username}))
  },[params])
  
  useEffect(()=>{
    dispatch(fetchUserDetails(username));
    dispatch(fetchUserPhotos({pageNumber,username}));
  },[username])

  useEffect(()=>{
    dispatch(fetchUserPhotos({pageNumber,username}));
  },[pageNumber])
  
  if (loader){
    return <div className={styles.loader}>Socialfly............</div>;
  }
  else if (error){
    return <div className="error">{error}</div>;
  }
   else {
    return ( 
      <div className={styles.container}>
        {userDetails && <UserCard user={userDetails} photosCount={photoCount} />}
        <div className={styles.photoContainer}>
        {isLoading ? "loading...." : <Grid feed={userPhotos} />}
        </div>
       
      </div>
    );
  }
};
export default UserPage;
