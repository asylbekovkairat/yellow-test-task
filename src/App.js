import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import LetMeIn from "./pages/LetMeIn";
import JogsPage from "./pages/JogsPage";
import Header from "./components/Header/Header";
import InfoPage from "./pages/InfoPage"
import Publicroute from "./route/PublicRoute"
import PrivateRoute from "./route/PrivateRoute"

const initialState = JSON.parse(localStorage.getItem("authData")) 

function App() {
  const [auth, setAuth] = useState(initialState)
  const [dateTo, setDateTo] = useState(0)
  const [dateFrom, setDateFrom] = useState(0)

  // console.log(new Date(test).toLocaleDateString())
  useEffect(() => {
    localStorage.setItem("authData", JSON.stringify(auth))
  }, [auth])

  return (
    <>
      <BrowserRouter> 
        <div> 
          <Header setDateFrom={setDateFrom} setDateTo={setDateTo}/> 
            <Routes> 
              <Route path="/" element={<Publicroute auth={auth} component={<LetMeIn setAuth={setAuth}/>}/>} /> 
              <Route path='/jogs' element={<PrivateRoute auth={auth} component={<JogsPage dateFrom={dateFrom} dateTo={dateTo}/>}/>} /> 
              <Route path='/info' element={<InfoPage />} />
            </Routes> 
        </div> 
      </BrowserRouter>
    </>
  );
}

export default App;
