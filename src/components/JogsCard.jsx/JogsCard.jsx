import React from "react";

export default function JogsCard({distance, time, date, id, editCard}) {

  return (
    <>
      <div className="jogsCard">
        <img src="./images/icon.svg" alt="run" onClick={() => editCard(id)} />
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
