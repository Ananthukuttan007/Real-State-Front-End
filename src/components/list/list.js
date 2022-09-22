import "./list.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PropertyList = () => {
  const [state, setState] = useState([]);
  
  const [buttonValue, setButtonValue] = useState(false)
  const toggle = () => {
    setButtonValue(!buttonValue)
  }
  // const btn = document.getElementById('btn');

  // // ✅ Change button text on click
  // btn.addEventListener('click', function handleClick() {
  //   btn.textContent = 'Sold';
  // });
  
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
          <div className="propertycontainer">
          {state.map(user => {
            console.log(user)
            return (
              <>
                <div className="property">
                <tr className="tablehead data">
                  <td className="thtext data">{user.PPDId}</td>
                  <td className="image"><i class="fa-sharp fa-solid fa-images"></i></td>
                  <td className="thtext data">{user.propertyType}</td>
                  <td className="thtext data thmobile">{user.mobile}</td>
                  <td className="thtext data">{user.area}</td>
                  <td className="thtext data">{user.Views}</td>
                  <td className="thtext data">{<button id="btn" onClick={toggle}>{buttonValue ? 'sold' : 'Unsold'}</button>}</td>
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
