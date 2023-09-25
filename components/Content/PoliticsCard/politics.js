import React from "react";
import "../../../app/business/page.css";

function Politics({ politics }) {

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3   gap-4">
      {politics.slice(0,6).map((article, index) =>
      article.urlToImage && (
        <div key={index} className="card2">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className=" relative">
              <img
                src={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://resources.alleghenycounty.us/css/images/Default_No_Image_Available.png"
                }
                className="w-full h-56 rounded-lg" 
                alt=""
                style={{ borderRadius: "12px" }}
              />
              <div className="overlay">
                <p className="text-sm font-bold align-text-bottom" style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  maxHeight: "90px",
                }}>
                  {article.title}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
  
}

export default Politics;




