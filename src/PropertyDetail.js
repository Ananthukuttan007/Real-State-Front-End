import React from 'react'
import './PropertyDetail.css'
import SideNavBar from './components/sidenavbar/SideNavBar'
import Header from './components/headerpage/Header'
import { useNavigate } from 'react-router-dom';


function PropertyDetail() {
    const navigate = useNavigate()
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


                        <div className="PropertyDetail1">
                            <p>2</p>&nbsp;&nbsp;
                            <p>Property  Detail</p>
                        </div>



                        <div className="GeneralInfo">
                            <p>3</p>&nbsp;&nbsp;
                            <p>General Info</p>
                        </div>


                        <div className="LocationInfo">
                            <p>3</p>&nbsp;&nbsp;
                            <p>Location Info</p>
                        </div>

                    </div>
                    <div className="formBox1">
                        <form action="">
                            <div className="leftFormBox">
                                <label for="Length">Length</label>
                                <input type="number" placeholder='Example 1000' />
                                <label for='Total Area'>Total Area</label>

                                <input type="number" id='total area' placeholder='Example: 7500' />

                                <label for='Number of BHK'>No of BHK</label>
                                <select name="Number of BHK" id='Number of BHK'>
                                    <option value="" disabled selected>Select Number of BHK</option>
                                    <option >4</option>
                                    <option >5</option>
                                    <option >6</option>
                                    <option >7</option>
                                </select>
                                <label for='Attached'>Attached
                                </label>
                                <select name="Attached" id='Attached'>
                                    <option value="" disabled selected>Select Attached</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='Furnished'>Furnished
                                </label>
                                <select name="Furnished" id='Furnished'>
                                    <option value="" disabled selected>Select Furnished</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='Lift'>Lift
                                </label>
                                <select name="Lift" id='Lift'>
                                    <option value="" disabled selected>Select Lift</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='Facing'>Facing
                                </label>
                                <select name="Facing" id='Facing'>
                                    <option value="" disabled selected>Select Facing</option>
                                    <option >North</option>
                                    <option >North-East</option>
                                    <option >North-West</option>
                                    <option >South</option>
                                    <option >South-East</option>
                                    <option >South-West</option>
                                    <option >East</option>
                                    <option >West</option>
                                </select>
                            </div>
                            <div className="rightFormBox">
                                <label for='Breadth'>Breadth</label>
                                <input type="number" name="Breadth" id="Breadth" placeholder='Example: 1000' />
                                <label for='Area Unit'>Area Unit</label>
                                <select name="Area Unit" id='Area Unit'>
                                    <option value="" disabled selected>Select Area Unit</option>
                                    <option >sq ft</option>
                                    <option >sq cm</option>
                                </select>
                                <label for='No of Floors'>No of Floors</label>
                                <select name="No of Floors" id='No of Floors'>
                                    <option value="" disabled selected>Select No of Floors</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                </select>
                                <label for='Western Toilet'>Western Toilet</label>
                                <select name="Western Toilet" id='Western Toilet'>
                                    <option value="" disabled selected>Select Western Toilet</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='Car Parking'>Car Parking</label>
                                <select name="Car Parking" id='Car Parking'>
                                    <option value="" disabled selected>Select Car Parking</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='Electricity'>Electricity</label>
                                <input type="text" placeholder='Example: 3 Phase' />
                                <label for='space' style={{ visibility: 'hidden' }}>Space</label>
                                <input type="text" style={{ visibility: 'hidden' }} />
                            </div>

                            <div className="buttonBox1">
                                <button className="Previous" onClick={() => navigate('/basic-info')}>
                                    Previous
                                </button>
                                <button className=" save" onClick={() => navigate('/general-info')}>
                                    Save &#38; continue
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyDetail
