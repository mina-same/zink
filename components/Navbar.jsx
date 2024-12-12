import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";  // Import the CSS module

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header} />
      <div className={styles.line} />
      <Image
        width="100"
        height="100"
        alt="log"
        className={styles.logo}  // Apply the class from the CSS module
        src="https://res.cloudinary.com/dtcr7vypb/image/upload/v1733785695/hgwjx02qdrjslpvcznjl.png"
      />
    </div>
  );
};

export default Navbar;
