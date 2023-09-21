import React from "react";
import "../../../app/business/page.css";

function Card({ data, index, width, height }) {

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)", // Black with 50% opacity
    borderRadius: "12px",
    opacity: 0.7, // Adjust the opacity as needed (0.7 means 70% opacity)
    zIndex: 1, // Ensure the overlay is above the image
  };

  return (
    <div style={{height:'fit-content'}}>
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
          <div className=" md:relative flex" >
            <img
              src={
                data.urlToImage
                  ? data.urlToImage
                  : "https://resources.alleghenycounty.us/css/images/Default_No_Image_Available.png"
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
                    WebkitLineClamp: 3, // Number of lines to display
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
