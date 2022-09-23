import "./list.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PropertyList = ({ searchItem }) => {
  const [state, setState] = useState([]);
  const toggleAndSave = (e) => {
    let buttonArray = e.target.value.split(",");
    let soldUnsold = "Sold";
    if (buttonArray[1] === "Sold") {
      soldUnsold = "Unsold"
    }
    axios.put(`http://localhost:8080/asset/${buttonArray[0]}`, { Sold: soldUnsold }, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(async function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload(false)
  }
  useEffect(() => {
    {
      axios.get('http://localhost:8080/asset/', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
        .then(async function (response) {
          setState(response.data.reverse());
        })
        .catch(function (error) {
          console.log(error);
        });
    }


  }, [])
  return (

    <>

      <div className="propertycontaine">
        <table className="fixed_header">
          <thead>
            <tr>
              <th>PPD Id</th>
              <th className="thtext">Image</th>
              <th className="propertlist">Property</th>
              <th className="contact">Contact</th>
              <th className="contact">Area</th>
              <th>Views</th>
              <th>Status</th>
              <th className="daysleft">DaysLeft</th>
              <th>Action</th>
            </tr>
          </thead>
          <div>


            {state.filter((value) => {
              if (searchItem === "") {
                return value
              }
              else if (value.PPDId.split("D")[1].includes(searchItem)) {
                return value
              }
            }).map(user => {
              return (
                <>
                  <div>
                    <tr className="containerr">
                      <td className="data">{user.PPDId}</td>
                      <td className="image"><i class="fa-sharp fa-solid fa-images"></i></td>
                      <td className="propertyls" >{user.propertyType}</td>
                      <td className="mobile">{user.mobile}</td>
                      <td className="area">{user.totalArea}</td>
                      <td>{user.Views}</td>
                      <td><button id="btn" onClick={toggleAndSave} value={[user._id, user.Sold]}>{user.Sold}</button></td>
                      <td className="days">{user.DaysLeft}</td>
                      <td> <i class="fa-solid fa-eye"></i> <i class="fa-solid fa-pen"> </i></td>
     
                    </tr>
                  </div>

                </>

              )

            })}
          </div>



        </table>

      </div>

    </>

  );
};
export default PropertyList;
