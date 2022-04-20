import React from "react";

export default React.memo(function EditModal({
  setActiveEdit,
  editSubmit,
  setDate,
  setTime,
  setDistance,
  distance,
  time,
  date,
  activeEdit,
}) {

  
  return (
    <div className={`editModal_wrapper ${activeEdit ? "active" : ""}`}>
      <form onSubmit={editSubmit} className="editModal_window">
        <div className="cancelBtn">
          <img
            onClick={() => setActiveEdit(false)}
            src="./images/cancel.svg"
            alt="cancel"
          />
        </div>
        <label>
          <div>Distance</div>
          <input
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            type="number"
          />
        </label>
        <label>
          <div>Time</div>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="number"
          />
        </label>
        <label>
          <div>Date</div>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </label>
        <button className={`save_btn`}>Edit</button>
      </form>
    </div>
  );
})
