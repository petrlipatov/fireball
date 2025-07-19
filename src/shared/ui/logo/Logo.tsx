import Image from "next/image";
import React from "react";

const Logo = ({ width = 150, height = 150, priority = false }) => {
  return (
    <Image
      src="/logo.jpg"
      alt="logo"
      width={width}
      height={height}
      priority={priority}
    />
  );
};

export default Logo;
