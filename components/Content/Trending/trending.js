import React, { useState, useEffect } from "react";
import "./Trending.css";

const Trending = ({ avatars, info }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState();
  const visibleAvatars = avatars.slice(currentIndex, currentIndex + 4);

  useEffect(() => {
    // Update the screenWidth state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window]);

  return (
    <div
      className="avatar-container mx-auto"
      style={{
        background: "#dfdfdf",
        borderRadius: "15px",
      }}
    >
      {visibleAvatars
        .slice(0, screenWidth < 768 ? 1 : screenWidth < 1000 ? 2 : 3)
        .map((avatar, index) => (
          <a
            href={info[index] && info[index].url}
            target="_blank"
            rel="noopener noreferrer"
            className="avatar"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src={avatar}
              alt={`Avatar ${currentIndex + index + 1}`}
              className="rounded-avatar"
            />

            {info[index] && ( // Check if info[index] exists
              <div style={{ padding: "10px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    width: "200px",
                    fontWeight: 600,
                    fontFamily: "Maven pro",
                    display: "-webkit-box",
                    WebkitLineClamp: 3, // Number of lines to display
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    maxHeight: "90px",
                  }}
                >
                  {info[index].title}{" "}
                  {/* Display title from the fetched data */}
                </p>
                <p style={{ fontSize: "10px" }}>
                  {info[index].publishedAt}{" "}
                  {/* Display publishedAt from the fetched data */}
                </p>
              </div>
            )}
          </a>
        ))}
    </div>
  );
  
};

export default Trending;
