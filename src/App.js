import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/login";
import Signup from "./components/signUp/signUp";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import PropertyView from "./components/PropertyView/PropertyView";
import BasicInfo from "./BasicInfo";
import PropertyDetail from "./PropertyDetail";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
function App() {
  const [formData, setFormData] = useState({
    propertyType: "",
    negotable: "",
    price: '',
    ownership: "",
    propertyAge: "",
    propertyApproved: "",
    propertyDescription: "",
    bankLoan: "",
    length: '',
    breath: '',
    totalArea: '',
    areaUnit: "",
    noOfBHK: '',
    noOfFloor: '',
    attached: "",
    western: "",
    furnished: "",
    carParking: "",
    lift: "",
    electricity: "",
    facing: "",
    name: "",
    mobile: '',
    postedBy: "",
    saleType: "",
    featuredPackage: "",
    ppdPackage: "",
    email: "",
    city: "",
    area: "",
    pincode: '',
    address: "",
    landmark: "",
    latitude: "",
    longitude: ""
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/basic-info" element={
          <PrivateRouter>
            <BasicInfo
              formData={formData} setFormData={setFormData}
            />
          </PrivateRouter>
        } />
        <Route path="/property-detail" element={
          <PrivateRouter>
            <PropertyDetail
              formData={formData} setFormData={setFormData}
            />
          </PrivateRouter>
        } />
        <Route path="/general-info" element={
          <PrivateRouter>
            <GeneralInfo
              formData={formData} setFormData={setFormData}
            />
          </PrivateRouter>

        } />
        <Route path="/location-info" element={
          <PrivateRouter>
            <LocationInfo
              formData={formData} setFormData={setFormData}
            />
          </PrivateRouter>
        } />
        <Route path="/home-page" element={
          <PrivateRouter>
            <PropertyView />
          </PrivateRouter>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
