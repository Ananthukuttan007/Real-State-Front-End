import Login from "./components/login/login";
import Signup from "./components/signUp/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyView from "./components/PropertyView/PropertyView";
import BasicInfo from "./BasicInfo";
import PropertyDetail from "./PropertyDetail";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
import { useState } from "react";
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
        <Route path="/basic-info" element={<BasicInfo
          formData={formData} setFormData={setFormData}
        />} />
        <Route path="/property-detail" element={<PropertyDetail
          formData={formData} setFormData={setFormData}
        />} />
        <Route path="/general-info" element={<GeneralInfo
          formData={formData} setFormData={setFormData}
        />} />
        <Route path="/location-info" element={<LocationInfo
          formData={formData} setFormData={setFormData}
        />} />
        <Route path="/home-page" element={<PropertyView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
