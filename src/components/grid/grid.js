import { useEffect, useRef, useState } from "react";

import styles from "./grid.module.css";

import { useSelector } from "react-redux";

import useBottom from "../../services/isBottom";
import Feed from "../feed/feed";
import Loading from "../loading/loading";

const Grid = ({ feed,pageNumber,setPageNumber}) => {
   
  const odd = feed?.filter((item, index) => index % 2 !== 0);
  const even = feed?.filter((item, index) => index % 2 === 0);

  /////////////////////ui logic /////////////////////////////
  return (
    <div className={styles.cardGrid}>
      <div className={styles.row}>
        {odd && odd?.map((item, index) => {
          return <Feed key={index} item={item} arr={odd} pageNumber={pageNumber} setPageNumber={setPageNumber}/>;
        })}
      </div>
      <div className={styles.row} id="Grid">
        {even && even?.map((item, index) => {
          return <Feed key={index} item={item} index={index} arr={even} pageNumber={pageNumber} setPageNumber={setPageNumber}/>;
        })}
      </div>
      <Loading/>
    </div>
  );
};
export default Grid;
