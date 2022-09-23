import React from 'react'
import './LocationInfo.css'
import SideNavBar from './components/sidenavbar/SideNavBar'
import Header from './components/headerpage/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function LocationInfo({ formData, setFormData }) {
    const addProperty = (e) => {
        e.preventDefault();
        axios.post('https://hotproperty.herokuapp.com/asset/', formData,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(function (response) {
                console.log(response.data);
                alert(response.data.message);
                setFormData({
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
                if (response.data.message === "success") {
                    navigate('/home-page')
                }
            })
            .catch(function (error) {
                alert('error')
            });
    }


    const navigate = useNavigate()

    const token = localStorage.getItem("token");
    if (token == undefined) {
        alert("login to continue")
        navigate('/')
    }
    return (
        <>
            <div className="container">
                <div className="left">
                    <SideNavBar />
                </div>
                <div className="right">
                    <Header />
                    <h4 className="addANewProperty">
                        Add new Property
                    </h4>

                    <div className="progress">


                        <div className="BasicInfo1">
                            <p>1</p> &nbsp;&nbsp;
                            <p>Basic Info</p>
                        </div>


                        <div className="PropertyDetail">
                            <p>2</p>&nbsp;&nbsp;
                            <p>Property  Detail</p>
                        </div>



                        <div className="GeneralInfo">
                            <p>3</p>&nbsp;&nbsp;
                            <p>General Info</p>
                        </div>


                        <div className="LocationInfo1">
                            <p>3</p>&nbsp;&nbsp;
                            <p>Location Info</p>
                        </div>

                    </div>
                    <div className="formBox">
                        <form action="">
                            <div className="leftFormBox">
                                <label for="Email">Email</label>
                                <input type="text" id='Email' placeholder='Email'
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                    }}
                                    value={formData.email}
                                />
                                <label for='Area'>Area</label>
                                <input type="Area" id='Area' placeholder='Area'
                                    onChange={(e) => {
                                        setFormData({ ...formData, area: e.target.value });
                                    }}
                                    value={formData.area}
                                />

                                <label for='Address'>Address</label>
                                <input type="text" placeholder='Address'
                                    onChange={(e) => {
                                        setFormData({ ...formData, address: e.target.value });
                                    }}
                                    value={formData.address}
                                />
                                <label for='Latitude'>Latitude
                                </label>
                                <input type="text" id='Latitude' placeholder='Latitude'
                                    onChange={(e) => {
                                        setFormData({ ...formData, latitude: e.target.value });
                                    }}
                                    value={formData.latitude}
                                />
                            </div>
                            <div className="rightFormBox">
                                <label for='City'>City</label>
                                <input type="text" placeholder='City'
                                    onChange={(e) => {
                                        setFormData({ ...formData, city: e.target.value });
                                    }}
                                    value={formData.city}
                                />
                                <label for='Pincode'>Pincode</label>
                                <input type="number" placeholder='Pincode'
                                    onChange={(e) => {
                                        setFormData({ ...formData, pincode: e.target.value });
                                    }}
                                    value={formData.pincode}
                                />
                                <label for='Landmark'>Landmark</label>
                                <input type="text" placeholder='Landmark'
                                    onChange={(e) => {
                                        setFormData({ ...formData, landmark: e.target.value });
                                    }}
                                    value={formData.landmark}
                                />
                                <label for='Longitude'>Longitude</label>
                                <input type="text" placeholder='Longitude'
                                    onChange={(e) => {
                                        setFormData({ ...formData, longitude: e.target.value });
                                    }}
                                    value={formData.longitude}
                                />
                            </div>

                            <div className="buttonBox">
                                <button className="Previous" onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/general-info')
                                }}>
                                    Previous
                                </button>
                                <button className="Add"
                                    onClick={addProperty}
                                >
                                    Add Property
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationInfo
