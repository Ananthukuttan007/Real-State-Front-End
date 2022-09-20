import React from 'react'
import './BasicInfo.css'
import SideNavBar from './components/sidenavbar/SideNavBar'
import Header from './components/headerpage/Header'

function BasicInfo() {
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


                        <div className="BasicInfo">
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


                        <div className="LocationInfo">
                            <p>3</p>&nbsp;&nbsp;
                            <p>Location Info</p>
                        </div>

                    </div>
                    <div className="formBox">
                        <form action="">
                            <div className="leftFormBox">
                                <label for="Property-Type">Property Type</label>
                                <select name="Property-Type" id="Property-Type">
                                    <option value="" disabled selected>Select your option</option>
                                    <option >land</option>
                                    <option >Flat</option>
                                </select>
                                <label for='price'>Price</label>

                                <input type="number" id='price' placeholder='Example: 10000' />

                                <label for='Property Age'>Property Age</label>
                                <select name="Property Age" id='Property Age'>
                                    <option value="" disabled selected>Select Property Age</option>
                                    <option >Less than 5 years</option>
                                    <option >More than 5 years</option>
                                </select>
                                <label for='Property Description'>Property Description
                                </label>
                                <input type="text" id='Property Description' />
                            </div>
                            <div className="rightFormBox">
                                <label for='Negotiable'>Negotiable</label>
                                <select name="Negotiable" id='Negotiable'>
                                    <option value="" disabled selected>Negotiable</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='ownership'>Ownership</label>
                                <select name="ownership" id='ownership'>
                                    <option value="" disabled selected>Select Ownership</option>
                                    <option >Individual</option>
                                    <option >Joint</option>
                                </select>
                                <label for='Property Approved'>Property Approved</label>
                                <select name="Property Approved" id='Property Approved'>
                                    <option value="" disabled selected>Select Property Approved</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='Bank Loan'>Bank Loan</label>
                                <select name="Bank Loan" id='Bank Loan'>
                                    <option value="" disabled selected>Select Bank Loan</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>

                            </div>

                            <div className="buttonBox">
                                <button className="cancel">
                                    Cancel
                                </button>
                                <button className="save">
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

export default BasicInfo
