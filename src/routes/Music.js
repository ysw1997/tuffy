import React from 'react'
import { Link } from 'react-router-dom';
import {Img} from './Home'
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import jukeboxStatic from '../assets/images/music/jukeboxStatic.png'
import jukeboxActive from '../assets/images/music/jukeboxActive.gif'
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"



export const ChildPageWrapper = styled.div`
background-color:#FFFCB8;
height:100%;
position:fixed;
width:100%;
`
const JukeWrapper = styled.div`
margin-top: -200px;
position: absolute;
margin-right:50px;
background-color:pink;
width:700px;
height:900px;
right:120px;
`
const SongWrapper = styled.div`
position: absolute;
top:200px;
left:340px;
font-family: Avenir;
font-style: normal;
font-weight: bold;
color:#522a61;
font-size: 22px;
`
const JukeboxImg = styled.img`
width:75%;
height:75%;
margin-right:10px;
`
const Song = styled.div`
margin-top:20px;
`

function Music() {
    return (
        <ChildPageWrapper >
            <Link to="/">Home</Link>
            <Img src={tuffyLogo} alt ="logo" />
                <div className="logo">
                <JukeWrapper>
                    {/* <JukeboxImg src={jukeboxActive} alt="jukeboxAcitve" /> */}
                    <JukeboxImg src={jukeboxStatic} alt="jukeboxStatic" />
                        <SongWrapper>
                            <Song>I‘m a Tiger</Song>
                            <Song>Mommy & me</Song>
                            <Song>Let it rain</Song>
                        </SongWrapper>
                </JukeWrapper>
                   
                </div>
                    <Sidebar />
                <Footer />
        </ChildPageWrapper>
    );
}

export default Music;