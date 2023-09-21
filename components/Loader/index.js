"use client";
import React from "react";
import loaderGIF from "../../app/loading.gif";
import Image from "next/image";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={loaderGIF} alt="" width={200} height={200} />
    </div>
  );
}

export default Loader;
