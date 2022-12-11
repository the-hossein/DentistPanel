import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "./StyleNav";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { CheckLoginAction } from "../../services/checkLogin";
import { useSelector } from "react-redux";
const Nav = () => {
  const UserAccessLevel = useSelector((state) => state.userSlice.userdata);
  useEffect(() => {
    if (UserAccessLevel[0].data.user.userAccessLevel !== 1) {
      localStorage.removeItem("UserToken");
      localStorage.removeItem("UserPhoneNumber");
      window.location.replace("/");
    }
  }, [UserAccessLevel]);
  useEffect(() => {
    console.log(UserAccessLevel);
    if (UserAccessLevel[0].data.user.userAccessLevel !== 1) {
      localStorage.removeItem("UserToken");
      localStorage.removeItem("UserPhoneNumber");
      window.location.replace("/");
    }
  }, []);
  return (
    <NavStyle>
      <div>
        <p>پنل ادمین</p>
        <div></div>
      </div>
      <ul>
        <li>
          <NavLink
            className={(isActive) =>
              isActive.isActive === true ? "active-item" : ""
            }
            to="/panel/sample"
          >
            <div>
              <DashboardIcon />
            </div>
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) =>
              isActive.isActive === true ? "active-item" : ""
            }
            to="/panel/accesslevel"
          >
            <div>
              <CalendarMonthIcon />
            </div>
            <span> سطح دسترسی</span>
          </NavLink>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
