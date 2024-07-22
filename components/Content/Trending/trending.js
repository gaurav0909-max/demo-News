import React, { useState, useEffect } from "react";
import "./Trending.css";

const Trending = ({ avatars, info }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Initialize with window width
  const visibleAvatars = avatars.slice(currentIndex, currentIndex + 4);

  useEffect(() => {
    
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="avatar-container mx-auto"
      style={{
        background: "#dfdfdf",
        borderRadius: "15px",
        padding: "10px", // Added padding for better spacing
      }}
    >
      {visibleAvatars
        .slice(0, screenWidth < 768 ? 1 : screenWidth < 1000 ? 2 : 3)
        .map((avatar, index) => (
          <a
            key={currentIndex + index} // Added key for list items
            href={info[currentIndex + index] && info[currentIndex + index].url}
            target="_blank"
            rel="noopener noreferrer"
            className="avatar"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src={avatar}
              alt={`Avatar ${currentIndex + index + 1}`}
              className="rounded-avatar"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }} // Ensure avatar is round
            />
            {info[currentIndex + index] && (
              <div style={{ padding: "10px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    width: "200px",
                    fontWeight: 600,
                    fontFamily: "Maven Pro",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    maxHeight: "90px",
                  }}
                >
                  {info[currentIndex + index].title}
                </p>
                <p style={{ fontSize: "10px" }}>
                  {info[currentIndex + index].publishedAt}
                </p>
              </div>
            )}
          </a>
        ))}
    </div>
  );
};

export default Trending;
