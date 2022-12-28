import styled from "styled-components";

export const NavStyle = styled.div`
  width: 260px;
  position: fixed;
  height: 100%;
  padding: 3rem 2.5rem;
  right: 0px;
  top: 0px;
  div{
      display: block;
      text-align: center;
      p{
        margin-top: 0px;
        color: var(--primary-black);
        font-size: 14pt;
      }
      div{
        display: flex;
    height: 1px;
    width: 100%;
    background: linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%);
      }
  }
  ul{
width: 100%;
padding: 0px;
list-style: none;
li{
    width: 100%;
    padding: 0px;
    margin: 12px 0px;
    a{
        display: flex;
        direction: rtl;
        padding: 12px;
        text-decoration:none;
        align-items: center;
        div{
            margin-left: 12px;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            background-color: white;
            padding:6px 4px;
            svg{
                color: var(--main-color);
                width: 20px;
            }
        }
        span{
            color: var(--dark-pen);
            font-size: 12pt;
        }
        span:first-child{
         color: var(--primary-pen);
        }
    }
    .active-item{
        background-color: white;
        box-shadow: var(--box-shadow);
        border-radius: 12px;
        padding: 8px 12px;
        div{
            background-color: var(--main-color);
            svg{
                color: white;
            }
        }
        span{
            color: var(--primary-black);
        }
    }
}
  }
`;