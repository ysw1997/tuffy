import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import jukeboxStatic from '../assets/images/music/jukeboxStatic.png'
import jukeboxActive from '../assets/images/music/jukeboxActive.gif'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import letItRain from '../assets/songs/letItRain.wav'
import imATiger from '../assets/songs/imATiger.wav'
import mommyAndMe from '../assets/songs/mommyAndMe.wav'
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from "react-player";
import cdCover from "../assets/images/music/cdCover.png";
import titleCd from "../assets/images/music/titleCd.png";
import headerMusic from "../assets/images/music/headerMusic.png";
import plane from "../assets/sidebarIcon/tuffyPlane.gif"



export const ChildPageWrapper = styled.div`
background-color:#FFFCB8;
// height:100%;
height: 100%;
position:fixed;
width:100%;
overflow-y: scroll;
`
export const LogoImg = styled.img`
position:absolute;
cursor:pointer;
width: 350px;
left:20px;
top:20px;
z-index:1000;

`

const JukeWrapper = styled.div`
margin-top: -50px;
position: absolute;
margin-left:50px;
width:900px;
left:-100px;
top:30%;

`
const SongWrapper = styled.div`
position: absolute;
top:250px;
left:450px;
font-family: Avenir;
font-style: normal;
color:#522a61;
font-size: 22px;
`


const JukeboxImg = styled.img`
width:75%;
height:75%;
margin-right:10px;
margin-bottom:200px;
`
const Song = styled.div`
padding-top:26px;
width:150px;
display: inline-block;
font-weight: ${props => (props.isPlay ? '900' : '600')};

`
const PauseIcon = styled(BsFillPauseFill)`
position:absolute;
// top:-2px;
margin-top:30px;
;`

const PlayIcon = styled(BsFillPlayFill)`
position:absolute;
// top:-2px;
margin-top:30px;
;`

const SongBox= styled.div`
  font-family: Avenir;
font-style: normal;
`

const Player = styled(ReactAudioPlayer)`
// opacity:0;`

const Player2 = styled(ReactPlayer)`
background-color:red;
opacity:0;
width:1px
height:1px;
`
const TitleImg = styled.img`
width:300px;
position:absolute;
margin-top:400px;
margin-left:-150px;
`
const Caption = styled.div`
margin-top:350px;
font-family: Avenir;
font-style: normal;
color:#522a61;
font-size: 28px;
font-weight:900;

`
const MusicTitle = styled.img`
width:300px;
top:200px;
margin-top:70px;
`

const CdImg = styled.img`
position: absolute;
height:280px;
width:280px;
top:50px;
left:115px;
border-radius: 15px;
`

const AlbumWrapper = styled.div`
// background-color:#ffd8b4;
position: absolute;
top:320px;
left:720px;
width:500px;
height:550px;
border-radius: 15px;
`
const TeacherLink = styled(Link)`
text-decoration:none;
`
export const PlaneImg=styled.img`
position: absolute;
top:50px;
left:70px;
width:80%;
`

function Music() {
    const [showGif, setGif] = useState(false)
    const [songs,setSongs] =useState([
        { title: "I'm A Tiger", isPlaying:false, src:imATiger, audio:new Audio(imATiger)},
        { title: "Mommy & Me", isPlaying: false, src: mommyAndMe, audio: new Audio(mommyAndMe) },
        { title: "Let It Rain", isPlaying: false, src: letItRain, audio: new Audio(letItRain)}
    ])

    const handleClick = (item) =>{
        console.log(item)
        const updatedOptions = songs.map(song => {
            song.audio.pause()
            return (song.title === item.title
                ? { ...song, isPlaying: !song.isPlaying }
                : {...song, isPlaying:false} )
        }
        )
   
        setSongs(updatedOptions)
        // songs.map(song => {
        //     song.isPlaying ? song.audio.pause() : song.audio.play()
        // })
        // let audio = new Audio(item.src)
        item.isPlaying ? item.audio.pause():item.audio.play()
       
        
    }

    useEffect(()=>{
        const gif = songs.filter(item => item.isPlaying === true).length !== 0
        setGif(gif)
    },[songs])

    let audio = new Audio(letItRain)

    const start = () => {
        audio.play()
        console.log('play')
    }

    return (
        <ChildPageWrapper >
           
            {/* <MusicTitle src={headerMusic} /> */}
            {/* <Link to="/"><LogoImg src={tuffyLogo} alt="logo" /></Link> */}
                {/* <div className="logo"> */}
            {/* <PlaneImg src={plane} /> */}
                
               
                <JukeWrapper>
                    {showGif?<JukeboxImg src={jukeboxActive} alt="jukeboxAcitve" />:<JukeboxImg src={jukeboxStatic} alt="jukeboxStatic" />}
                        <SongWrapper>
                        {songs.map((item)=>
                            <SongBox >
                                <Song isPlay={item.isPlaying}>{item.title}</Song>
                                {/* <Player2 url={item.src} playing={item.isPlaying} /> */}
                                {item.isPlaying ? <PauseIcon onClick={() => handleClick(item)} /> : <PlayIcon onClick={() => handleClick(item)} />} <br />
                            </SongBox>
                        )}
               
                        </SongWrapper>
                </JukeWrapper>
                <AlbumWrapper>
                    <CdImg src={cdCover} alt="cdCover" />
                    <TeacherLink to="/parents&teachers">
                    <TitleImg src={titleCd} />
                    <Caption>Get Tuffy's first album today!</Caption>
                    </TeacherLink>
                </AlbumWrapper>
                {/* </div> */}
               {/* <Footer /> */}
        </ChildPageWrapper>
       
    );
}

export default Music;