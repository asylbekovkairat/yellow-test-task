import React, { useEffect, useState } from "react";
import EditModal from "../components/EditModal.jsx/EditModal";
import JogsCard from "../components/JogsCard.jsx/JogsCard";
import SaveModal from "../components/saveModal/SaveModal";
import Api from "../Api/Api.js"

export default function JogsPage({ dateFrom, dateTo, burger }) {
  const authData = JSON.parse(localStorage.getItem("authData"));
  const [jogsData, setJogsData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [allData, setAllData] = useState(0);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");
  const [userId, setUserId] = useState("");
  const [jogId, setJogId] = useState(0);
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeSave, setActiveSave] = useState(false);
  const [user, setUser] = useState([]);
  const [jogDataState, setJogDataState] = useState(false);

  // first option of making request 
  const getAllJogs = async () => {
    try{
      const data = await Api.getAllJogs()
      setJogsData(data.data.response.jogs)
    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    getAllJogs()
  }, [allData]);

  // second option of making request 
  useEffect(() => {
    Api.getAuthUser()
      .then(res => setUser(res.data.response))
  }, []);

  const editSubmitData = {
    date: date,
    time: time,
    distance: distance,
    user_id: userId,
    jog_id: jogId,
  }

  const editSubmit = (e) => {
    e.preventDefault();
    Api.putJogs(editSubmitData)
    setAllData(allData + 1);
    setActiveEdit(false);
  };

  const editCard = (id) => {
    jogsData.forEach((el) => {
      if (el.id === id) {
        let yourDate = new Date(el.date * 1000);
        const offset = yourDate.getTimezoneOffset();
        yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
        const date = yourDate.toISOString().split("T")[0];
        setDate(date);
        setDistance(el.distance);
        setTime(el.time);
        setUserId(el.user_id);
        setJogId(el.id);
        setActiveEdit(true);
      }
    });
  };

  useEffect(() => {
    jogsData.forEach((el) => {
      if (user.id === el.user_id) {
        setJogDataState(true);
      }
    });
  });

  return (
    <>
      {jogDataState ? (
        <div
          className={`jogsCard_wrapper ${
            activeSave || activeEdit || burger ? "active" : " "
          }`}
        >
          {jogsData.map((item) =>
            user.id === item.user_id ? (
              dateFrom === 0 && dateTo === 0 ? (
                <JogsCard
                  editCard={editCard}
                  key={item.id}
                  {...item}
                  id={item.id}
                />
              ) : dateFrom <= item.date * 1000 && dateTo >= item.date * 1000 ? (
                <JogsCard
                  editCard={editCard}
                  key={item.id}
                  {...item}
                  id={item.id}
                />
              ) : (
                ""
              )
            ) : (
              ""
            )
          )}
          <img
            onClick={() => setActiveSave(true)}
            className={`add_icon ${activeSave ? "active" : " "}`}
            src="./images/add.svg"
            alt="#"
          />
        </div>
      ) : (
        <div className={`nothingPage_wrapper ${edit ? "active" : " "}`}>
          <img src="./images/sad_emoji.svg" alt="sad" />
          <div data-testid="nothing is there">nothing is there</div>
          <button
            onClick={() => setActiveSave(true)}
            className={`create_btn ${edit ? "active" : ""}`}
          >
            Create your new jog!
          </button>
        </div>
      )}
      <EditModal
        setActiveEdit={setActiveEdit}
        activeEdit={activeEdit}
        editSubmit={editSubmit}
        setEdit={setEdit}
        setTime={setTime}
        setDate={setDate}
        setDistance={setDistance}
        time={time}
        date={date}
        distance={distance}
      />
      <SaveModal
        authData={authData}
        activeSave={activeSave}
        setActiveSave={setActiveSave}
        setAllData={setAllData}
        allData={allData}
      />
    </>
  );
}
