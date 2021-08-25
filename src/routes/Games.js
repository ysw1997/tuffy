import React from 'react'
import { Link } from 'react-router-dom';
import { ChildPageWrapper } from './Music'
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import { Img } from './Home'



const GamesWrapper = styled(ChildPageWrapper)`
background-color: #E7CEF6;
`

function Games() {
    return (
        <GamesWrapper >
            games
            <Link to="/">Home</Link>
            <div className="logo">
                <Img src={tuffyLogo} alt="tuffyLogo" />
            </div>
            <Sidebar />
            <Footer />
        </GamesWrapper>
    );
}

export default Games;