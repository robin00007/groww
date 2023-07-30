import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";
const Navbar = ({ user }) => {
  //////////////////// UI login //////////////////////////////////////
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Socialfly</h1>
      <div className={styles.usersContainer}>
        {user.map((item, index) => {
          return (
            <Link
              href={"/user/[username]"}
              as={`/user/${item.username}`}
              className={styles.user}
              key={index}
            >
              <div className={styles.icon}>
                <Image
                  className={styles.icon}
                  height={40}
                  width={40}
                  style={{ height: "100%", width: "100%" }}
                  src={item.profile_image.small}
                  alt={item.name ? item.name : "username"}
                />
              </div>
              <p className={styles.userName}>
                {item?.name ? item.name : "No username"}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
