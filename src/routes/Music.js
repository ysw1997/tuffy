import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {Img} from './Home'
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import jukeboxStatic from '../assets/images/music/jukeboxStatic.png'
import jukeboxActive from '../assets/images/music/jukeboxActive.gif'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'



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
color:#522a61;
font-size: 22px;


`
const JukeboxImg = styled.img`
width:75%;
height:75%;
margin-right:10px;
`
const Song = styled.div`
padding-top:21px;
width:150px;
display: inline-block;
font-weight: ${props => (props.isPlay ? '900' : '600')};

`
const PauseIcon = styled(BsFillPauseFill)`
position:absolute;
// top:-2px;
margin-top:25px;
;`

const PlayIcon = styled(BsFillPlayFill)`
position:absolute;
// top:-2px;
margin-top:25px;
;`

const SongBox= styled.div`
  font-family: Avenir;
font-style: normal;
`


function Music() {
    const [showGif, setGif] = useState(false)
    const [songs,setSongs] =useState([
        { title: "I'm A Tiger", isPlaying:false},
        { title: "Mommy & Me", isPlaying: false },
        { title: "Let It Rain", isPlaying: false }
    ])

    const handleClick = (title) =>{
        const updatedOptions = songs.map(item => {
            return (item.title === title
                ? { ...item, isPlaying: !item.isPlaying }
                : {...item, isPlaying:false} )
        }
        )
        setSongs(updatedOptions)
        
        
    }

    useEffect(()=>{
        const gif = songs.filter(item => item.isPlaying === true).length !== 0
        setGif(gif)
    },[songs])

    // const SongBox=(props)=>{
    //     return (
    //         <div>
    //             <Song>{props.title}</Song>
    //             { props.isPlay ? <PauseIcon onClick={()=>handleClick(props.title)} /> : <PlayIcon onClick={()=>handleClick(props.title)} />} <br />
    //         </div>
    //     )
    // }

    return (
        <ChildPageWrapper >
            <Link to="/">Home</Link>
            <Img src={tuffyLogo} alt ="logo" />
                <div className="logo">
                <JukeWrapper>
                    {showGif?<JukeboxImg src={jukeboxActive} alt="jukeboxAcitve" />:<JukeboxImg src={jukeboxStatic} alt="jukeboxStatic" />}
                        <SongWrapper>
                        {songs.map((item)=>
                            <SongBox >
                                <Song isPlay={item.isPlaying}>{item.title}</Song>
                                {item.isPlaying ? <PauseIcon onClick={() => handleClick(item.title)} /> : <PlayIcon onClick={() => handleClick(item.title)} />} <br />
                            </SongBox>
                        )}
                        </SongWrapper>
                </JukeWrapper>
                   
                </div>
                    <Sidebar />
                <Footer />
        </ChildPageWrapper>
    );
}

export default Music;