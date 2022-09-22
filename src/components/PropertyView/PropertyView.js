import "./PropertyView.css";
import SideNavBar from "../sidenavbar/SideNavBar";
import { useNavigate } from 'react-router-dom';
import Header from "../headerpage/Header";
import React, { useState, useEffect } from "react";
import SearchRes from "../SearchRes/SerachRes";
import PropertyList from "../list/list";
const PropertyView = () => {
  const navigate = useNavigate()
  const [property, setProperty] = useState([]);
  const token = localStorage.getItem("token");
  if (token == undefined) {
    alert("login to continue")
    navigate('/')
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("{Fetch URL}", {
        headers: {
          authorization: token,
        },
      });
      // console.log(response)
      const data = await response.json();
      setProperty(data);
      // console.log(data);
    }
    fetchData();
  }, [token]);


  //console.log(property)

  return (
    <>
      <div className="maincontainer">
        <div className="sidenav">
          <SideNavBar />
        </div>

        <div className="subpart">
          <div className="headerpart">
            <Header />
          </div>

          <div className="searchpart">

            <SearchRes property={property} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PropertyView;
