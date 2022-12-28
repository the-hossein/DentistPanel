import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../components/Box/Box";
import { Container } from "../components/Container/Container";
import Nav from "../components/Navbar/Nav";
import AccessLevelPanel from "../components/Sections/Login/AccessLevelPanel";
import { getUserInfo } from "../redux/slices/UserSlice";
import { CheckLoginAction } from "../services/checkLogin";
import Loader from "../tools/loader/Loader";

const AccessLevelPage = () => {
    const dispatch = useDispatch();
    const preload = useSelector((state) => state.userSlice);
    useEffect(() => {
      const checklogin = async () => {
        const loginState = await CheckLoginAction();
     
        if (loginState === 0) {
          dispatch(getUserInfo(localStorage.getItem("UserToken")));
        }
        if (loginState === 1) {
          window.location = "/";
        }
      };
      checklogin();
    }, []);
  return (
    <>
      {preload.isLoad === true || preload.userLogin === false ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Container
            title="سطح دسترسی"
            child={
              <>
                <Box children={<AccessLevelPanel />} />
              </>
            }
          />
        </>
      )}
    </>
  );
};

export default AccessLevelPage;
