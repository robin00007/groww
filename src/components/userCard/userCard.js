import Link from "next/link";
import Image from "next/image";

import styles from "./userCard.module.css";

const UserCard = ({ user, photosCount }) => {
  console.log('userDetails',user)
  //////////////////// UI login //////////////////////////////////////
  return (
    <div className={styles.container}>
      <Image
        height={300}
        width={300}
        src={user?.profile_image?.large}
        priority
        alt="profile_images"
        className={styles.image}
      />
      <div className={styles.detailContainer}>
        <p className={styles.username}>{user.name}</p>
        <Link href="/" className={styles.title}>
          Socialfly
        </Link>
        <div className={styles.socialInfo}>
          <p>{photosCount ? photosCount : null} photos</p>
          <p>{user?.followers_count ? user?.followers_count : 0} Followers</p>
          <p>{user?.follwing_count ? user?.following_count : 0} Following</p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
