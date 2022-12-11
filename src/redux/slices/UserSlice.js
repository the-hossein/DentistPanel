import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { LoginRequest } from "../../services/Service";
import { CallApi } from "../../tools/CallApi/CallApi";
import { BaseUrl, LoginReqest } from "../../tools/Url";

const initialState = {
  userdata: {},
  isLoad: false,

  userLogin: false,
};
export const getUserInfo = createAsyncThunk(
  //action type string
  "userSlice/getUserInfo",
  // callback function
  async (token) => {
    var myHeaders = new Headers();
    var T = JSON.parse(token);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + T.token);

    var raw = JSON.stringify({
      phonenumber: localStorage.getItem("UserPhoneNumber"),
    });
    return await CallApi(BaseUrl + LoginReqest, raw, myHeaders, "POST");
  }
);
export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.isLoad = true;
    },

    [getUserInfo.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.userdata = action.payload;
      state.userLogin = true;
    },

    [getUserInfo.rejected]: (state) => {
      state.status = false;
    },
  },
});

// Action creators are generated for each case reducer function


export default userSlice.reducer;
