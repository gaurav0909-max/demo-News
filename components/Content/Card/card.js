import React from "react";
import "../../../app/business/page.css";

function Card({ data, index, width, height }) {
  return (
    <div style={{ height: "fit-content" }}>
      <div
        className="row-span-1 col-span-1 card2"
        key={index}
        style={{ width: width, height: height }}
      >
        <a
          href={data?.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className=" md:relative flex">
            <img
              src={
                data.urlToImage
                  ? data.urlToImage
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"
              }
              className="w-full rounded-lg"
              alt=""
              style={{ width: "100%", borderRadius: "12px", height: height }}
            />
            <div className=" overlay absolute top-0 left-0 w-full h-full md:flex justify-center items-end">
              <div className=" text-center">
                <p
                  className="text-sm align-text-bottom"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    maxHeight: "70px",
                  }}
                >
                  {data.title}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
