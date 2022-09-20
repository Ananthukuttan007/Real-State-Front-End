import "./list.css";
const PropertyList = () => {
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
        </table>
      </div>
    </>
  );
};
export default PropertyList;
