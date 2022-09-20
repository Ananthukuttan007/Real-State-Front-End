import "./SearchRes.css";
import PropertyList from "../list/list";
import { BsSearch, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

const SearchRes = () => {
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
          />
          <button type="submit" className="isearchbtn">
            <BsSearch className="btncolor" />
          </button>
        </div>
        <Link to="">
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
