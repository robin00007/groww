import styles from "./topNavbar.module.css";

const TopNavbar = () => {
  //////////////////// UI login //////////////////////////////////////
  return (
    <div className={styles.container}>
      <p className={styles.quote}>{" Capturing moments, framing emotions "}</p>
      <p className={styles.title}>Socialfly</p>
    </div>
  );
};
export default TopNavbar;
