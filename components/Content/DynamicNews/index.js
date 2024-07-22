import React from "react";
import Card from "../Card/card";

const DynamicNewsLayout = ({ news, isScreenWidthLessThan1000 }) => {
  return (
    <div className="parent">
      <div className="div1 flex justify-start items-center px-3">
        <h3 className="text-xl p-2">Trending Now</h3>
        <hr
          style={{
            width: "100%",
            height: "2px",
            background: "#dfdfdf",
            margin: "auto",
          }}
        />
      </div>
      {news?.slice(0,5).map((data, index) => {
        // Calculate width and height dynamically based on index
        let width, height;

        if (index === 2) {
          width = isScreenWidthLessThan1000 ? "100%" : "470px";
          height = "420px";
        } else {
          width = "200px";
          height = "200px";
        }

        return (
          <div key={index} className={`div${index + 2} p-4 flex justify-center`}>
            <Card data={data} width={width} height={height} />
          </div>
        );
      })}
    </div>
  );
};

export default DynamicNewsLayout;
