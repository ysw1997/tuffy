import React from 'react'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import tuffyLogo from '../assets/images/header/tuffy_logo.png'


const Body = styled.body`
background: #E9FBF9;
`;
const Wrapper = styled.section`
background-color: white;
margin-left: 60px;
margin-right: 60px;
margin-top: 60px;
margin-bottom:60px;
`;
const Img = styled.img`
margin-top: 20px;
margin-left: 20px;
width: 40%;
height: 40%;
display: flex;
`;


function Home() {
    return (
    <Body>
    <Wrapper>
        <div className="logo">
            <Img src={tuffyLogo} alt="tuffyLogo" />
        </div>
        <div className="Home">    
            <Sidebar />
        </div>
    
    </Wrapper>
    </Body>
    
    );
  }
  
  export default Home;