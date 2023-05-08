import React from "react";
import "./style.scss";
import {
  MdNotifications,
  MdHome,
  MdExitToApp,
  MdHistory,
  MdSentimentDissatisfied,
  MdLibraryBooks,
  MdThumbUp,
  MdSubscriptions,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, toogleshowSidebar }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => toogleshowSidebar(false)}
    >
      <Link to='/'>
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      </Link>
         <Link to='/feed/subscriptions'>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      </Link>

      <li>
        <MdThumbUp size={23} />
        <span>Liked videos</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't know</span>
      </li>
      <hr />
      <li onClick={logoutHandler}>
        <MdExitToApp size={23} />
        <span>Logout</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
