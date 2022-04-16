import React from "react";
import { useState } from "react";
import axios from "axios";

export default function EditModal({ edit, setEdit,setAllData, allData }) {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const authData = JSON.parse(localStorage.getItem("authData"))

  const handleSave = () => {
    setEdit(false)
  }
  const submit = (e) => {
    e.preventDefault();
    axios.post("https://jogtracker.herokuapp.com/api/v1/data/jog", { 
      'date': date, 
      "time": time, 
      "distance": distance 
    }, 
    { 
      headers: { 'Authorization': `Bearer ${authData.access_token}` } 
    }) 
    setAllData(allData + 1) 
  };

  return (
    <div className={`editModal_wrapper ${edit ? "active" : ""}`}>
      <form onSubmit={submit} className="editModal_window">
        <div className="cancelBtn">
          <img onClick={() => setEdit(false)} src="./cancel.svg" alt="cancel"/>
        </div>
        <label>
          <div>Distance</div>
          <input value={distance} onChange={(e) => setDistance(e.target.value)} type="number" />
        </label>
        <label>
          <div>Time</div>
          <input value={time} onChange={(e) => setTime(e.target.value)} type="number" />
        </label>
        <label>
          <div>Date</div>
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
        </label>
        <button onClick={() => setEdit(false)} className={`save_btn ${edit ? "active" : " "}`}>Save</button>
      </form>
    </div>
  );
}
