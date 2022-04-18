import React from "react";
import { useState } from "react";
import axios from "axios";

export default function SaveModal({
  setActiveSave,
  activeSave,
  setAllData,
  allData,
  authData,
}) {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    axios.post(
      "https://jogtracker.herokuapp.com/api/v1/data/jog",
      {
        date: date,
        time: time,
        distance: distance,
      },
      {
        headers: { Authorization: `Bearer ${authData.access_token}` },
      }
    );
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
            required
          />
        </label>
        <button className={`save_btn`}>Save</button>
      </form>
    </div>
  );
}
