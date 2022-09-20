import "./Header.css";
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const userId = localStorage.getItem("userid");
  const userName = userId.split("@")[0];

  return (
    <>
      <div className="headercontainer">
        <div className="userid">USER ID: </div>

        <div className="dropdown">
          <BiUser />
          <CgChevronDown />
          <div className="dropdown-content"></div>
        </div>
      </div>

      <div className="headerbtmline"></div>
    </>
  );
};
export default Header;
