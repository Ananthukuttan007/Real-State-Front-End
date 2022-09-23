import React, { useState } from 'react'
import './GeneralInfo.css'
import SideNavBar from './components/sidenavbar/SideNavBar'
import Header from './components/headerpage/Header'
import { useNavigate } from 'react-router-dom';

function GeneralInfo({ formData, setFormData }) {
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    if (token == undefined) {
        alert("login to continue")
        navigate('/')
    }
    const [fileName, setFileName] = useState("Add Photo");
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



                        <div className="GeneralInfo1">
                            <p>3</p>&nbsp;&nbsp;
                            <p>General Info</p>
                        </div>


                        <div className="LocationInfo">
                            <p>3</p>&nbsp;&nbsp;
                            <p>Location Info</p>
                        </div>

                    </div>
                    <div className="formBox">
                        <form action="">
                            <div className="leftFormBox">
                                <label for="Name">Name</label>
                                <input type="text" placeholder='Owner'
                                    onChange={(e) => {
                                        setFormData({ ...formData, name: e.target.value });
                                    }}
                                    value={formData.name}
                                />
                                <label for='Posted By'>Posted By</label>

                                <input type="text" id='Posted By' placeholder='Posted By'
                                    onChange={(e) => {
                                        setFormData({ ...formData, postedBy: e.target.value });
                                    }}
                                    value={formData.postedBy}
                                />

                                <label for='Featured Package'>Featured Package</label>
                                <select name="Featured Package" id='Featured Package'
                                    onChange={(e) => {
                                        setFormData({ ...formData, featuredPackage: e.target.value });
                                    }}
                                    value={formData.featuredPackage}
                                >
                                    <option value="" disabled selected>Featured Package</option>
                                    <option >4</option>
                                    <option >5</option>
                                    <option >6</option>
                                    <option >7</option>
                                </select>
                                <input onChange={(e) => {
                                    setFileName(e.target.value.split("\\").pop())
                                    // setFile(e.target.files[0])
                                }
                                }
                                    type="file" name="PostImage" id="file" class="inputfile" style={{ display: "none" }} />

                                <label className='buttonLabel' style={{ display: 'inline-block' }} for="file">
                                    <img src="images/Vector.png" alt="Browse" />
                                </label>&nbsp;&nbsp;
                                <p style={{ display: 'inline-block' }} >{fileName}</p>

                            </div>
                            <div className="rightFormBox">
                                <label for='Mobile'>Mobile</label>
                                <input type="number" name="Mobile" id="Mobile" placeholder='Enter Mobile Number'
                                    onChange={(e) => {
                                        setFormData({ ...formData, mobile: e.target.value });
                                    }}
                                    value={formData.mobile}
                                />
                                <label for='Sale Type'>Sale Type</label>
                                <select name="Sale Type" id='Sale Type'
                                    onChange={(e) => {
                                        setFormData({ ...formData, saleType: e.target.value });
                                    }}
                                    value={formData.saleType}
                                >
                                    <option value="" disabled selected>Select Sale Type</option>
                                    <option >Direct</option>
                                    <option >Auction</option>
                                </select>
                                <label for='PPD Package'>PPD Package</label>
                                <select name="PPD Package" id='PPD Package'
                                    onChange={(e) => {
                                        setFormData({ ...formData, ppdPackage: e.target.value });
                                    }}
                                    value={formData.ppdPackage}
                                >
                                    <option value="" disabled selected>Select PPD Package</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                </select>
                                <label for='space' style={{ visibility: 'hidden' }}>Space</label>
                                <input type="text" style={{ visibility: 'hidden' }} />
                            </div>

                            <div className="buttonBox1">
                                <button className="Previous" onClick={() => navigate('/property-detail')}>
                                    Previous
                                </button>
                                <button className=" save" onClick={(e) => {
                                    e.preventDefault();
                                    if (formData.mobile == "") {
                                        alert("Mobile is a mandatory field")
                                    }
                                    else {
                                        navigate('/location-info')
                                    }
                                }}>
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

export default GeneralInfo
