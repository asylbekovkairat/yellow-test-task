import React from "react";
import { useState } from "react";
import Api from "../../Api/Api";

export default React.memo(function SaveModal({
  setActiveSave,
  activeSave,
  setAllData,
  allData,
}) {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");
  const saveSubmitData = {
    distance: distance,
    time: time,
    date: date,
  };

  const submit = (e) => {
    e.preventDefault(saveSubmitData);
    Api.postJogs();
    setAllData(allData + 1);
    setActiveSave(false);
  };

  return (
    <div className={`editModal_wrapper ${activeSave ? "active" : ""}`}>
      <form onSubmit={submit} className="editModal_window">
        <div className="cancelBtn">
          <img
            onClick={() => setActiveSave(false)}
            src="./images/cancel.svg"
            alt="cancel"
          />
        </div>
        <label>
          <div>Distance</div>
          <input
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            required
          />
        </label>
        <label>
          <div>Time</div>
          <input
            onChange={(e) => setTime(e.target.value)}
            type="number"
            required
          />
        </label>
        <label>
          <div>Date</div>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder="what's the date?"
            required
          />
        </label>
        <button className={`save_btn`}>Save</button>
      </form>
    </div>
  );
});
