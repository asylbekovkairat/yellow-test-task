import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LetMeIn from "./pages/LetMeIn";
import JogsPage from "./pages/JogsPage";
import Header from "./components/Header/Header";
import Publicroute from './route/PublicRoute';
import Privateroute from './route/PrivateRoute';
import EditModal from "./components/EditModal.jsx/EditModal";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <>
      <BrowserRouter> 
      <div> 
        <Header/> 
        <EditModal/>
          <Routes> 
            <Route path="/" element={<LetMeIn />} /> 
            <Route path='/jogs' element={<JogsPage />} /> 
            <Route path='/info' element={<InfoPage />} /> 
            {/* <Route path='/contact-us' element={<Contact />} />  */}
          </Routes> 
      </div> 
    </BrowserRouter>
    </>
  );
}

export default App;
