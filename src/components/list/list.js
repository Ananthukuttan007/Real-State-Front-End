import "./list.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PropertyList = () => {
  const [state, setState] = useState([]);
  const [button, setbutton] = useState(false)
  const toggle = () => {
    setbutton(!button)
  }
  // const btn = document.getElementById('btn');

  // // ✅ Change button text on click
  // btn.addEventListener('click', function handleClick() {
  //   btn.textContent = 'Sold';
  // });
  useEffect(() => {
    axios.get('http://localhost:8080/asset/')
        .then(function (response) {
            setState(response.data.reverse());
            console.log(response);
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
              <th className="thtext">Inuge</th>
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
              return(
                <>
              <tr className="tablehead data">
              <td>{}</td>
              <td className="image"><i class="fa-sharp fa-solid fa-images"></i></td>
              <td>{user.property}</td>
              <td>{user.contact}</td>
              <td>{user.area}</td>
              <td>{}</td>
              <td>{<button id="btn" onClick={toggle}>{button ? 'sold' :'Unsold'}</button>}</td>
              <td>{}</td>
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
