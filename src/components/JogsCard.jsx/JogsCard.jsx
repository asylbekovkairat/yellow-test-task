import React from "react";

export default function JogsCard({distance, time, date}) {
  return (
    <>
      <div className="jogsCard">
        <img src="./icon.svg" alt="run" />
        <div className="jogsCard_desc">
          <p className="jogDate">
            {new Date(+date * 1000).toLocaleDateString()}
          </p>
          <p>Speed: 15 </p>
          <p>Distance: {distance} km </p>
          <p>Time: {time} min </p>
        </div>
      </div>
    </>
  );
}
