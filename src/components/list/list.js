import "./list.css";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



const PropertyList = ({ searchItem }) => {
  const navigate = useNavigate()
  const [state, setState] = useState([]);
  const toggleAndSave = (e) => {
    let buttonArray = e.target.value.split(",");
    let updateContent = {
      DaysLeft: 0,
      Sold: "Sold"
    }
    if (buttonArray[1] === "Sold") {
      updateContent.Sold = "Unsold"
      updateContent.DaysLeft = parseInt(Math.random() * 10)
    }

    axios.put(`https://hotproperty.herokuapp.com/asset/${buttonArray[0]}`, updateContent, {
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
    alert('status changed successfully')
    navigate('/home-page')
  }
  useEffect(() => {
    {
      axios.get('https://hotproperty.herokuapp.com/asset/', {
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


  }, [state])
  return (

    <>

      <div className="propertycontainer">
        <table className="fixed_header">
          <thead>
            <tr>
              <th>PPD Id</th>
              <th className="thtext">Image</th>
              <th className="propertlist">Property</th>
              <th className="contact">Contact</th>
              <th className="areahead">Area</th>
              <th>Views</th>
              <th>Status</th>
              <th className="daysleft">DaysLeft</th>
              <th>Action</th>
            </tr>
          </thead>
          <div className="listBox">


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
                      <td className="action"> <i class="fa-solid fa-eye"></i> <i class="fa-solid fa-pen"> </i></td>

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
