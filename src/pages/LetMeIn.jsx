import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LetMeIn() {

  const navigate = useNavigate()
  const letinAuth = () => {
    axios.post("https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin", {
      "uuid" : "hello"
    })
    .then(async res => {
      await localStorage.setItem("authData", JSON.stringify(res.data.response || null))
      navigate("/jogs")
    })
  }

  return (
    <>
      <div className="modalWindow">
        <div className="letMeIn_modalWindow">
          <img src="./bear-face.svg" alt="bear-face" />
          <button className="link_to_jogsPage" onClick={letinAuth}>Let Me In</button>
        </div>
      </div>
    </>
  );
}
