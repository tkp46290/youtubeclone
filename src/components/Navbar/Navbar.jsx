import React, { useState } from "react";
import "./style.scss";
import logo from "../../../src/assets/images/youtube.png";
import user from "../../../src/assets/images/user.png";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaUserCircle,
  FaHome,
  FaMicrophone,
  FaVideo,
  FaTh,
  FaRegUserCircle,
} from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineAudio } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ toogleshowSidebar }) => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${input}`);
  };
  const user = useSelector((state) => state.auth?.user);

const handleHome=()=>{
  navigate('/')

}

  return (
    <div className="navbar">
      <FaBars
        size={26}
        className="navbar-menu"
        onClick={() => toogleshowSidebar()}
      />
      <img src={logo} alt="logo" className="navbar-logo" onClick={handleHome} />
      {/* <BsYoutube size={26} className="navbar-logo" /> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
        {/* <FaMicrophone size={25} /> */}
        {/* <AiOutlineAudio size={25}/> */}
      </form>
      <div className="navbar-icon">
        <FaBell size={25} />
        <MdApps size={25} />
        {/* <FaRegUserCircle  size={25} className="navbar-icon-user" /> */}
        <img src={user?.photoURL} alt='avatar' />
      </div>
    </div>
  );
};

export default Navbar;
