


export const CheckLoginAction =async () => {
  var stateLogin = 0;
  if (localStorage.getItem("UserToken")) {
    var token = JSON.parse(localStorage.getItem("UserToken"));
    const now = new Date();
    const endDate = new Date(token.expiration);
  
    if (endDate - now < 0) {
   
      localStorage.removeItem("UserToken");
      localStorage.removeItem("UserPhoneNumber");

      if (window.location.pathname !== "/") {
        stateLogin = 1
      } else {
       
        stateLogin = 2
      }
    } else {
       
        stateLogin = 0;
    }
  } else {
    /*   console.log(window.location.pathname); */
    if (window.location.pathname !== "/") {
      stateLogin = 1;
    } else {
      stateLogin = 2;
    }
  }
  return stateLogin;
};
