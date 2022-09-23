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
          <div className="propertycontainer">


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
                  <div className="property">
                    <tr className="tablehead data">
                      <td className="thtext data">{user.PPDId}</td>
                      <td className="image"><i class="fa-sharp fa-solid fa-images"></i></td>
                      <td className="thtext data">{user.propertyType}</td>
                      <td className="thtext data thmobile">{user.mobile}</td>
                      <td className="thtext data">{user.totalArea}</td>
                      <td className="thtext data">{user.Views}</td>
                      <td className="thtext data"><button id="btn" onClick={toggleAndSave} value={[user._id, user.Sold]}>{user.Sold}</button></td>
                      <td className="thtext data">{user.DaysLeft}</td>
                      <td className="eye"><i class="fa-solid fa-eye"></i></td>
                      <td className="pen"><i class="fa-solid fa-pen"></i></td>
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
