import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BaseUrl, SignUpReqest } from "../../../tools/Url";
import { LoginEl } from "./StyleLogin";
import { CallApi } from "../../../tools/CallApi/CallApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../tools/loader/Loader";
import { CheckLoginAction } from "../../../services/checkLogin";
import { useDispatch } from "react-redux";
import { addUserData, getUserInfo } from "../../../redux/slices/UserSlice";
const LoginSection = () => {
  var dispatch = useDispatch();
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Code, setCode] = useState("");
  const [preload, setpreload] = useState(true);
  const [loginState, setloginState] = useState(0);

  const sendOtp = async (e) => {
    if (e.keyCode === 13) {
      setpreload(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        methodname: 5,
        checkPhoneNumber: {
          phonenumber: PhoneNumber,
        },
      });

      const result = await CallApi(
        BaseUrl + SignUpReqest,
        raw,
        myHeaders,
        "POST"
      );
      if (result[1] === 200) {
        setpreload(false);
        setloginState(1);
        toast.success("کد تایید برای شما ارسال گردید", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setpreload(false);
        toast.error("خطا در انجام عملیات", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  const sendVerify = async (e) => {
    if (e.keyCode === 13) {
      setpreload(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        methodname: 2,
        otpCheck: {
          phoneNumber: PhoneNumber,
          code: Code,
          referralSite: "string",
          type: 0,
        },
      });

      const result = await CallApi(
        BaseUrl + SignUpReqest,
        raw,
        myHeaders,
        "POST"
      );
      if (result[1] === 200) {
        localStorage.setItem("UserToken", JSON.stringify(result[0].data));
        localStorage.setItem("UserPhoneNumber", PhoneNumber);
        var Result = await CheckLoginAction();
        if(Result === 0){
          dispatch(getUserInfo(localStorage.getItem("UserToken"),localStorage.getItem("UserPhoneNumber")))
          window.location = "/panel/sample"
        }
        
      } else {
        toast.error("خطا در انجام عملیات", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("UserToken")) {
      var token = JSON.parse(localStorage.getItem("UserToken"));
      const now = new Date();
      const endDate = new Date(token.expiration);
      if (endDate - now < 0) {
        
        localStorage.removeItem("UserToken");
        localStorage.removeItem("UserPhoneNumber");

        if (window.location.pathname !== "/") {
          window.location = "/";
        } else {
          setpreload(false);
        }
      } else {
        window.location = "/panel/sample";
      }
    } else {
      /*   console.log(window.location.pathname); */
      if (window.location.pathname !== "/") {
        window.location = "/";
      } else {
        setpreload(false);
      }
    }
  }, []);

  return (
    <LoginEl>
      <div className="login-sidebar">
        <h1> Welcome to Panel Admin</h1>
      </div>
      <div className="login-box">
        <div>
          {loginState === 0 ? (
            <input
              value={PhoneNumber}
              type="text"
              placeholder="شماره همراه"
              onChange={(e) => setPhoneNumber(e.target.value)}
              onKeyDown={(e) => sendOtp(e)}
            />
          ) : (
            <input
              value={Code}
              type="text"
              placeholder="کد تایید"
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => sendVerify(e)}
            />
          )}
        </div>
      </div>

      <ToastContainer />
      {preload === true ? <Loader /> : null}
    </LoginEl>
  );
};

export default LoginSection;
