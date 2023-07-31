`use client`;
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";

import { Blurhash } from "react-blurhash";

import styles from "./feedCard.module.css";

import isBottom from "../../services/isBottom";
const Feed = ({ item, index, arr }) => {

  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);

  isBottom(containerRef, item);


  //////////////////// UI login //////////////////////////////////////
  return (
    <Link
      href={"/user/[username]"}
      as={`/user/${item.user.username}`}
      className={styles.container}
      ref={arr.length - 1 === index ? containerRef : null}
    >
      <div className={styles.image}>
        {!imageLoaded && (
          <Blurhash hash={item?.blur_hash} width={800} height={400} />
        )}
        <Image
          src={item?.urls?.regular}
          alt={item.alt_description ? item.alt_description : "image"}
          width={300}
          height={200}
          style={{ height: "100%", width: "100%", visibility: "hidden" }}
          onLoad={(e) => {
            setImageLoaded(true);
            e.target.style.visibility = "visible";
          }}
        />

        <div className={styles.userDetails}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.userImage}
              src={item?.user?.profile_image?.medium}
              alt={item.alt_description}
              width={50}
              height={50}
              property={(index === 0) | (index === 1) ? "true" : "false"}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <p className={styles.username}>{item.user.name}</p>
        </div>
      </div>

      <div className={styles.count}></div>
      <p className={styles.detail}>
        <span className={styles.username}>
          {item.user.name ? item.user.name : "userName"}
        </span>{" "}
        {item.description
          ? item.description
          : item.alt_description
          ? item.alt_description
          : "nothing about the image is there"}
      </p>

    </Link>
  );
};
export default Feed;
