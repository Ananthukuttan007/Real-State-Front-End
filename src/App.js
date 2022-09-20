import Login from "./components/login/login";
import Signup from "./components/signUp/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyView from "./components/PropertyView/PropertyView";
import BasicInfo from "./BasicInfo";
import PropertyDetail from "./PropertyDetail";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/property-detail" element={<PropertyDetail />} />
        <Route path="/general-info" element={<GeneralInfo />} />
        <Route path="/listproperty" element={<PropertyView />} />
        <Route path="/location-info" element={<LocationInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
