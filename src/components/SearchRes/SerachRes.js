import "./SearchRes.css";
import PropertyList from "../list/list";
import { BsSearch, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import axios from 'axios'
const SearchRes = () => {

  
     const [searchItem, setSearchItem] = useState("")
    
     const handleTextSearch = (e) => {
      console.log(e.target.value)
     }
    
    
   const result = axios.get('http://localhost:8080/asset/', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error);
      });
  


return (
  <>
    <div className="seracharea">
      <div class="searchbtn">
        <input
          type="text"
          placeholder="Search ppd id"
          className="isearch"
          name="id"
          id="id"
         onChange={handleTextSearch}
        />
     
        {/* {result.filter((val)=> {
          if(searchItem == ""){
            return val
          } 
        })} */}
        <button type="submit" className="isearchbtn">
          <BsSearch className="btncolor" />
        </button>
      </div>
      <Link to="/basic-info">
        <button type="sumbit" className="addbtn">
          <BsPlus /> Add Property
        </button>
      </Link>
    </div>

    <div className="propertylstpart">
      <PropertyList />
    </div>
  </>
);
};
export default SearchRes;
