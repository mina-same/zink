import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: 80,
          left: 0,
          top: 0,
          position: "absolute",
          background: "white",
        }}
      />
      <div
        style={{
          width: "100%",
          height: 2,
          left: 0,
          top: 80,
          position: "absolute",
          background: "#EAECF0",
        }}
      />
      <Image
        width="100"
        height="100"
        alt="log"
        style={{
          width: 106,
          height: 41,
          left: 113,
          top: 25,
          position: "absolute",
        }}
        src="https://res.cloudinary.com/dtcr7vypb/image/upload/v1733785695/hgwjx02qdrjslpvcznjl.png"
      />
    </div>
  );
};

export default Navbar;
