
import Login from './components/login/login'
import Signup from './components/signUp/signUp'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BasicInfo from "./BasicInfo";
import PropertyDetail from "./PropertyDetail";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element = {<Login/>} />
        <Route path='/sign-up' element= {<Signup/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
