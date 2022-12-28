import styled from "styled-components";

export const LoginEl = styled.div`
  width: 100%;
  height: 100%;
  .login-sidebar {
    width: 40%;
    height: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 24pt;
      color: white;
    }
  }

  .login-box {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        margin: auto;
        input{
          padding:1.5rem ;
          text-align:right;
          width :330px;
          height:36px;
          border-radius:12px;
          border:1px solid #b3b3b3;
        }
        input:focus{
          outline:none
        }
    }
  }
`;
