import './BasicInfo.css'
import SideNavBar from './components/sidenavbar/SideNavBar'
import Header from './components/headerpage/Header'
import { useNavigate } from 'react-router-dom';
function BasicInfo({ formData, setFormData }) {
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
                                <select name="Property-Type" id="Property-Type" onChange={(e) => {
                                    setFormData({ ...formData, propertyType: e.target.value });
                                }}
                                    value={formData.propertyType}
                                >
                                    <option value="" disabled selected>Select Property Type</option>
                                    <option >land</option>
                                    <option >Flat</option>
                                </select>
                                <label for='price'>Price</label>

                                <input type="number" id='price' placeholder='Example: 10000'
                                    onChange={(e) => {
                                        setFormData({ ...formData, price: e.target.value });
                                    }}
                                    value={formData.price}
                                />

                                <label for='Property Age'
                                >Property Age</label>
                                <select name="Property Age" id='Property Age'
                                    onChange={(e) => {
                                        setFormData({ ...formData, propertyAge: e.target.value });
                                    }}
                                    value={formData.propertyAge}
                                >
                                    <option value="" disabled selected>Select Property Age</option>
                                    <option >Less than 5 years</option>
                                    <option >More than 5 years</option>
                                </select>
                                <label for='Property Description'>Property Description
                                </label>
                                <input type="text" id='Property Description'
                                    onChange={(e) => {
                                        setFormData({ ...formData, propertyDescription: e.target.value });
                                    }}
                                    value={formData.propertyDescription}
                                />
                            </div>
                            <div className="rightFormBox">
                                <label for='Negotiable'>Negotiable</label>
                                <select name="Negotiable" id='Negotiable'
                                    onChange={(e) => {
                                        setFormData({ ...formData, negotable: e.target.value });
                                    }}
                                    value={formData.negotable}
                                >
                                    <option value="" disabled selected>Negotiable</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='ownership'>Ownership</label>
                                <select name="ownership" id='ownership'
                                    onChange={(e) => {
                                        setFormData({ ...formData, ownership: e.target.value });
                                    }}
                                    value={formData.ownership}
                                >
                                    <option value="" disabled selected>Select Ownership</option>
                                    <option >Individual</option>
                                    <option >Joint</option>
                                </select>
                                <label for='Property Approved'>Property Approved</label>
                                <select name="Property Approved" id='Property Approved'
                                    onChange={(e) => {
                                        setFormData({ ...formData, propertyApproved: e.target.value });
                                    }}
                                    value={formData.propertyApproved}
                                >
                                    <option value="" disabled selected>Select Property Approved</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>
                                <label for='Bank Loan'>Bank Loan</label>
                                <select name="Bank Loan" id='Bank Loan'
                                    onChange={(e) => {
                                        setFormData({ ...formData, bankLoan: e.target.value });
                                    }}
                                    value={formData.bankLoan}
                                >
                                    <option value="" disabled selected>Select Bank Loan</option>
                                    <option >Yes</option>
                                    <option >No</option>
                                </select>

                            </div>

                            <div className="buttonBox">
                                <button className="cancel" onClick={() => {
                                    navigate('/home-page')
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
                                }

                                }>
                                    Cancel
                                </button>
                                <button className="save"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (formData.propertyType === "") {
                                            alert("PropertyType is a Mandatory Field")
                                            return false;
                                        }
                                        else {
                                            navigate('/property-detail')
                                        }
                                    }}
                                >
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
