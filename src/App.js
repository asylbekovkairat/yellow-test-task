import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LetMeIn from "./components/letMeIn/LetMeIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/jogs" element={<Header />}/>
          <Route path="/" element={<LetMeIn/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
