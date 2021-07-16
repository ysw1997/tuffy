import React from 'react'
import { Link } from 'react-router-dom';
import { ChildPageWrapper } from './Music'
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import { Img } from './Home'


const Wrapper = styled(ChildPageWrapper)`
background-color: #FAD5EB;

`
function Art() {
    return (
      <Wrapper >
        Arts
        <Link to="/">Home</Link>
        <div className="logo">
          <Img src={tuffyLogo} alt="tuffyLogo" />
        </div>

      </Wrapper>
    );
  }
  
  export default Art;