import axios from "axios";
import React, { useEffect, useState } from "react";
import EditModal from "../components/EditModal.jsx/EditModal";
import JogsCard from "../components/JogsCard.jsx/JogsCard";

export default function JogsPage() {
  const authData = JSON.parse(localStorage.getItem("authData"))
  const [jogsData, setJogsData] = useState([])
  const [edit, setEdit] = useState(false)
  const [allData, setAllData] = useState(0)
  const [action, setAction] = useState(false)
  const [jogsDataActive, setjogsDataActive ] = useState(false)
  useEffect(() => {
    axios.get("https://jogtracker.herokuapp.com/api/v1/data/sync", {
      headers: { "Authorization" : "Bearer " + authData.access_token}
    })
    .then((data) => {
      setJogsData(data.data.response.jogs);
    })
  }, [allData])

  return (
    <>
      {
        jogsDataActive ? <div className={`jogsCard_wrapper ${edit ? "active" : " "}`}>
        {
          jogsData.map((item) =>
            <JogsCard setAction={setAction} edit={edit} setEdit={setEdit} {...item}/>
          )
        }
        <img onClick={() => setEdit(true)} className={`add_icon ${edit ? "active" : " "}`} src="./add.svg" alt="#"/>
        </div> : <div className={`nothingPage_wrapper ${edit ? "active" : " "}`}>
        <img src="./sad_emoji.svg" alt="sad"/>
        <div>nothing is there</div>
        <button onClick={() => setEdit(true)} className={`create_btn ${edit ? "active" : ""}`}>Create your new jog!</button>
      </div>
      }
      <EditModal action={action} edit={edit} setEdit={setEdit} setAllData={setAllData} allData={allData}/>
    </>
  );
}
