import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import {
  getPopularvideos,
  getvideosByCategory,
} from "../../redux/actions/video.action";

const keywords = [
  "All",
  "React",
  "JavaScript",
  "CSS",
  "ipl",
  "angular",
  "vue",
  "nodejs",
  "java",
  "movie",
  "music",
  "dsa",
  "html",
  "python",
  "c++",
];
const CategoriesBar = () => {
  const [active, setActive] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActive(value);
    if (value === "All") {
      dispatch(getPopularvideos());
    } else {
      dispatch(getvideosByCategory(value));
    }
  };
 
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          className={active === value ? "active" : ""}
          key={i}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
