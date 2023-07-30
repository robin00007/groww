"use client";
import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchFeed } from "../redux/action";

import "../styles/globals.css";
import styles from "../styles/index.module.css";
import { Feed, Grid, Navbar, TopNavbar } from "../components";
import Head from "next/head";

const App = () => {
  const dispatch = useDispatch();

  const feed = useSelector((state) => state.feed.feeds);
  const loading = useSelector((state) => state.feed.isLoading);
  const loader = useSelector((state) => state.feed.loader);
  const error = useSelector((state) => state.feed.error);
  const page = useSelector((state) => state.feed.page);
  const user = useSelector((state) => state.feed.user);

  useEffect(() => {
    dispatch(fetchFeed(page));
  }, [dispatch, page]);

  //////////// return the page /////////////////
  if (loader) {
    return (
      <div className={styles.App}>
        <div className={`${styles.container} ${styles.title}`}>
          <p>Socialfly...</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.App}>
      {error ? (
        <div
          className={`${styles.container} ${styles.title}`}
          style={{ color: "red", fontSize: "2rem" }}
        >
          <p>Error : {error}</p>
        </div>
      ) : (
        <div className={styles.container}>
          <Navbar user={user} />
          <div className={styles.feedContainer}>
            <TopNavbar />
            {error}
            <Grid feed={feed} setFeed={feed} />
          </div>{" "}
        </div>
      )}
    </div>
  );
};
export default App;
