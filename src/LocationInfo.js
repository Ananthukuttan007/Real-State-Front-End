import React from 'react'
import './LocationInfo.css'
import SideNavBar from './components/sidenavbar/SideNavBar'
import Header from './components/headerpage/Header'

function LocationInfo() {
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
                                <input type="text" id='Email' placeholder='Email' />
                                <label for='Area'>Area</label>
                                <input type="Area" id='Area' placeholder='Area' />

                                <label for='Address'>Address</label>
                                <input type="text" placeholder='Address' />
                                <label for='Latitude'>Latitude
                                </label>
                                <input type="text" id='Latitude' placeholder='Latitude' />
                            </div>
                            <div className="rightFormBox">
                                <label for='City'>City</label>
                                <input type="text" placeholder='City' />
                                <label for='Pincode'>Pincode</label>
                                <input type="text" placeholder='Pincode' />
                                <label for='Landmark'>Landmark</label>
                                <input type="text" placeholder='Landmark' />
                                <label for='Longitude'>Longitude</label>
                                <input type="text" placeholder='Longitude' />
                            </div>

                            <div className="buttonBox">
                                <button className="Previous">
                                    Previous
                                </button>
                                <button className="Add">
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