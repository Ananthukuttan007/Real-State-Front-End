<<<<<<< HEAD

import Login from './components/login/login'
import Signup from './components/signUp/signUp'
import { BrowserRouter, Routes, Route } from "react-router-dom"
=======
import Login from "./components/login/login";
import Signup from "./components/signUp/signUp";
import PropertyView from "./components/PropertyView/PropertyView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> 1cb373f8a3f733e11bf0162ac4f8c85b50a32556
import BasicInfo from "./BasicInfo";
import PropertyDetail from "./PropertyDetail";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/basic-info' element={<BasicInfo />} />
          <Route path='/property-detail' element={<PropertyDetail />} />
          <Route path='/general-info' element={<GeneralInfo />} />
          <Route path='/location-info' element={<LocationInfo />} />
        </Routes>
      </BrowserRouter>

=======
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PropertyView />}></Route>
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 1cb373f8a3f733e11bf0162ac4f8c85b50a32556
    </>
  );
}

export default App;
