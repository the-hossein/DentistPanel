import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CallApi } from "../../../tools/CallApi/CallApi";
import Loader from "../../../tools/loader/Loader";
import { BaseUrl, UpdateAccessLevelRequest } from "../../../tools/Url";

const AccessLevelPanel = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [accessLevel, setaccessLevel] = useState(3);
  const [preload, setpreload] = useState(false);
  const UpdateAccessLevel = async () => {
    setpreload(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      phonenumber: phoneNumber,
      accesslevel: accessLevel,
    });
    const result = await CallApi(
      BaseUrl + UpdateAccessLevelRequest,
      raw,
      myHeaders,
      "POST"
    );

    if (result[1] === 200) {
      /*    dispatch(Success(result[0].data)); */
      setpreload(false);
      toast.success("با موفقیت ثبت شد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setInterval(() => {
        window.location = "/panel/sample";
      }, 1000);
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
  };
  return (
    <>
      {preload === true && <Loader />}
      <div className="row-fields center-row">
        <TextField
          value={phoneNumber}
          required
          label="شماره همراه  "
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }} required>
          <InputLabel id="TypeLable"> سطح دسترسی</InputLabel>
          <Select
            value={accessLevel}
            labelId="TypeLable"
            label="سطح دسترسی "
            onChange={(e) => setaccessLevel(e.target.value)}
          >
            <MenuItem value={0}>مدیر</MenuItem>
            <MenuItem value={1}>ادمین</MenuItem>
            <MenuItem value={2}>کاربر ساده</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="row-fields"></div>
      <div className="row-fields">
        <a onClick={UpdateAccessLevel} className="primary-btn">
          بروزرسانی
        </a>
      </div>
      <ToastContainer />
    </>
  );
};

export default AccessLevelPanel;
