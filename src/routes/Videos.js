import React from 'react'
import { Link } from 'react-router-dom';
import {ChildPageWrapper} from './Music'
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import { Img } from './Home'

const VideoWrapper = styled(ChildPageWrapper)`
background-color: #CAFAC3;
`

function Videos() {
    return (
        <VideoWrapper >
            vidoes
            <Link to="/">Home</Link>
            <div className="logo">
                <Img src={tuffyLogo} alt="tuffyLogo" />
            </div>
            <Sidebar />
            <Footer />
        </VideoWrapper>
    );
}

export default Videos;