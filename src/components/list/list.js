import "./list.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PropertyList = () => {
  const [state, setState] = useState([]);
  const [button, setbutton] = useState(false)
  const toggle = () => {
    setbutton(!button)
  }
  useEffect(() => {
    axios.get('http://localhost:8080/asset/', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(function (response) {
        setState(response.data.reverse());
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <>

      <div className="propertycontainer">
        <table>
          <thead>
            <tr className="tablehead">
              <th className="thtext ppdidhead">PPD Id</th>
              <th className="thtext">Image</th>
              <th className="thtext">Property</th>
              <th className="thtext thmobile">Contact</th>
              <th className="thtext">Area</th>
              <th className="thtext">Views</th>
              <th className="thtext">Status</th>
              <th className="thtext thdayleft">Days Left</th>
              <th className="thtext actiontxt">Action</th>
            </tr>
          </thead>

          {state.map(user => {
            console.log(user)
            return (
              <>
                <tr className="tablehead data">
                  <td>{user.PPDId}</td>
                  <td className="image"><i class="fa-sharp fa-solid fa-images"></i></td>
                  <td>{user.propertyType}</td>
                  <td>{user.mobile}</td>
                  <td>{user.area}</td>
                  <td>{user.Views}</td>
                  <td>{<button id="btn" onClick={toggle}>{button ? 'sold' : 'Unsold'}</button>}</td>
                  <td>{user.DaysLeft}</td>
                  <td className="eye"><i class="fa-solid fa-eye"></i></td>
                  <td className="pen"><i class="fa-solid fa-pen"></i></td>
                </tr>
              </>
            )
          })}




        </table>
      </div>
    </>
  );
};
export default PropertyList;
