import React from 'react'
import { Link } from 'react-router-dom';
import {Img} from './Home'
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";



export const ChildPageWrapper = styled.div`
background-color:#FFFCB8;
height:100%;
position:fixed;
width:100%;
`

function Music() {
    return (
        <ChildPageWrapper >
            music
            <Link to="/">Home</Link>
                <div className="logo">
                    <Img src={tuffyLogo} alt="tuffyLogo" />
                </div>
                    <Sidebar />
                <Footer />
        </ChildPageWrapper>
    );
}

export default Music;