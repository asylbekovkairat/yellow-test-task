import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import LetMeIn from "./pages/LetMeIn";
import JogsPage from "./pages/JogsPage";
import Header from "./components/Header/Header";
import InfoPage from "./pages/InfoPage";
import Publicroute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";
import ContactUsPage from "./pages/ContactUsPage";

const initialState = JSON.parse(localStorage.getItem("authData"));

function App() {
  const [auth, setAuth] = useState(initialState);
  const [dateTo, setDateTo] = useState(0);
  const [dateFrom, setDateFrom] = useState(0);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    localStorage.setItem("authData", JSON.stringify(auth));
  }, [auth]);

  return (
    <>
      <BrowserRouter>
        <div>
          <Header
            setDateFrom={setDateFrom}
            setDateTo={setDateTo}
            burger={burger}
            setBurger={setBurger}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Publicroute
                  auth={auth}
                  component={<LetMeIn setAuth={setAuth} />}
                />
              }
            />
            <Route
              path="/jogs"
              element={
                <PrivateRoute
                  auth={auth}
                  component={
                    <JogsPage
                      dateFrom={dateFrom}
                      dateTo={dateTo}
                      burger={burger}
                    />
                  }
                />
              }
            />
            <Route
              path="/info"
              element={
                <PrivateRoute
                  auth={auth}
                  component={<InfoPage burger={burger} />}
                />
              }
            />
            <Route
              path="/contactUs"
              element={
                <PrivateRoute
                  auth={auth}
                  component={<ContactUsPage/>}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
