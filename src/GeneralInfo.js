import React, { useState } from 'react'
import './GeneralInfo.css'

function GeneralInfo() {
    const [fileName, setFileName] = useState("Add Photo");
    return (
        <>
            <div className="container">
                <aside>

                </aside>
                <div className="right">
                    <nav>

                    </nav>
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
                                <input type="text" placeholder='Owner' />
                                <label for='Posted By'>Posted By</label>

                                <input type="text" id='Posted By' placeholder='Posted By' />

                                <label for='Featured Package'>Featured Package</label>
                                <select name="Featured Package" id='Featured Package'>
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
                                <input type="number" name="Mobile" id="Mobile" placeholder='Enter Mobile Number' />
                                <label for='Sale Type'>Sale Type</label>
                                <select name="Sale Type" id='Sale Type'>
                                    <option value="" disabled selected>Select Sale Type</option>
                                    <option >Direct</option>
                                    <option >Auction</option>
                                </select>
                                <label for='PPD Package'>PPD Package</label>
                                <select name="PPD Package" id='PPD Package'>
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
                                <button className="Previous">
                                    Previous
                                </button>
                                <button className=" save">
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