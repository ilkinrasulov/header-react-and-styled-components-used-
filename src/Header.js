import React from "react";
import styled from "styled-components";
import app from "./app.css";
function Header() {
  return (
    <div className="Header">
      <LeftMenu>
        <span>LOGO</span>
      </LeftMenu>
      <CenterMenu>
        <ul>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Articles</a>
          </li>
          <li>
            <a> About Us</a>
          </li>
        </ul>
      </CenterMenu>
      <CenterMenuPhone>
        <ul>
          <li>Menu</li>
        </ul>
      </CenterMenuPhone>
      <RightMenu>
        <ul>
          <li>
            <a>Log In</a>
          </li>
          <li>
            <a>Sign Up</a>
          </li>
        </ul>
      </RightMenu>
      <RightMenuPhone>
        <ul>
          <li>
            <a>Log In/Sign Up</a>
          </li>
        </ul>
      </RightMenuPhone>
    </div>
  );
}
const LeftMenu = styled.div`
  display: -webkit-flex;
  -webkit-justify-content: center;

  display: flex;
  justify-content: start;
  margin-left: 5%;
  span {
    padding: 10px;
  }
`;

const CenterMenu = styled.div`
  display: -webkit-flex;
  align-content: center;
  display: flex;
  justify-content: center;

  margin: 0 auto;
  @media only screen and (max-width: 716px) {
    display: none;
  }

  ul {
    display: flex;

    align-content: center;
    margin: 0 auto;
    width: 100%;

    li {
      align: center;
      padding: 5px;
      margin: 0 auto;
    }
  }
`;
const CenterMenuPhone = styled.div`
  display: -webkit-flex;
  align-content: center;
  display: flex;
  justify-content: center;

  margin: 0 auto;
  @media only screen and (max-width: 716px) {
    display: block;
  }
  @media only screen and (min-width: 717px) {
    display: none;
  }

  ul {
    display: flex;

    align-content: center;
    margin: 0 auto;
    width: 100%;

    li {
      align: center;
      padding: 5px;
      margin: 0 auto;
    }
  }
`;

const RightMenu = styled.div`
   display:-webkit-flex;
  -webkit-justify-content:center;

  display:flex;
  margin:0;
    justify-content:end;

    @media only screen and (max-width: 716px) {
    display: none;
  }

  ul{
    display:flex;
    padding:5px 0px;
    align-content:space-between;
    flex-wrap:wrap;
    width:100%;
    margin:0 10px;
    justify-content:end;
    
    li{
      align: center;
      padding: 5px 0px;
      margin: 0 15px;
      
      a{
        border:1px solid grey;
        padding: 5px 15px;
        border-radius: 10px;
        background-color:orange;
        color: white;
        text-transform:uppercase;
      }

    }
`;
const RightMenuPhone = styled.div`
display:-webkit-flex;
  -webkit-justify-content:center;

  display:flex;
  margin:0;
    justify-content:end;

    @media only screen and (max-width: 716px) {
    display: block;
  }

  @media only screen and (min-width: 717px) {
    display: none;
  }

  ul{
    display:flex;
    padding:5px 0px;
    align-content:space-between;
    flex-wrap:wrap;
    width:100%;
    margin:0 10px;
    justify-content:end;
    
    li{
      align: center;
      padding: 5px 0px;
      margin: 0 15px;
      
      a{
        border:1px solid grey;
        padding: 5px 15px;
        border-radius: 10px;
        background-color:orange;
        color: white;
        text-transform:uppercase;
      }

    }
`;
export default Header;
