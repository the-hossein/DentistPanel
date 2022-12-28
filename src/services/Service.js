import { CallApi } from "../tools/CallApi/CallApi";
import { BaseUrl, LoginReqest } from "../tools/Url";

export const LoginRequest = async (token, phoneNumber) => {
  var myHeaders = new Headers();
  var T = JSON.parse(token);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + T.token);
  

  var raw = JSON.stringify({
    phonenumber: phoneNumber,
  });
  const result = await CallApi(BaseUrl + LoginReqest, raw, myHeaders, "POST");
  return result;
};
