import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../components/Box/Box";
import { Container } from "../components/Container/Container";
import Nav from "../components/Navbar/Nav";
import Sample from "../components/Sections/Sample/Sample";
import { getUserInfo } from "../redux/slices/UserSlice";
import { CheckLoginAction } from "../services/checkLogin";
import Loader from "../tools/loader/Loader";

const SamplePage = () => {
  const dispatch = useDispatch();
  const preload = useSelector((state) => state.userSlice);
  useEffect(() => {
    const checklogin = async () => {
      const loginState = await CheckLoginAction();
      console.log(preload);
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
      {preload.isLoad === true ||  preload.userLogin === false? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Container
            title="نمونه کارها"
            child={
              <>
                <Box children={<Sample />} />
              </>
            }
          />
        </>
      )}
    </>
  );
};

export default SamplePage;
