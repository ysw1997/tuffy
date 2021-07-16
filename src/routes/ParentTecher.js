import React from 'react'
import { Link } from 'react-router-dom';
import { ChildPageWrapper } from './Music'
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import { Img } from './Home'
import plane from "../assets/sidebarIcon/tuffyPlane.gif"
import {LogoImg,PlaneImg} from './Music'
import titleCd from "../assets/images/music/titleCd.png"
import puzzle from "../assets/images/puzzle.png"
import newsletter from "../assets/images/newsletter.png"
import jellybean from "../assets/images/jellybean.png"
import sendmail from "../assets/images/sendmail.png"

const VideoWrapper = styled(ChildPageWrapper)`
background-color: #CAFAC3;
`

const WordWrapper = styled.div`
background-color:#f8fbca;
position:absolute;
left:10%;
top:200px;
width:1000px;
font-weight:400;
  border-radius: 15px;
  font-size:24px;
  margin-bottom:100px;
  font-family: Avenir;
font-style: normal;
text-indent:2em;
text-align:left;
padding-left:20px;
padding-right:10px;
padding-top:30px;
padding-bottom:50px;
`

const Resources = styled.div`
background-color: #f4f5a1;
margin-top:20px;
margin-left:10px;
margin-right:10px;
  border-radius: 15px;
padding-bottom:10px;
// padding-top:50px;
min-height:160px;

`
const TitleImg = styled.img`
margin-top:20px;
float:left;
width:250px;
// margin-top:50px;
max-height:150px;

`
const Title = styled.div`
text-align:center;
font-weight:600;
  font-size:32px;
`
const P = styled.div`
// position:relative;
// left:320px;
// width:650px;
// // top:-50px;
`

function ParentTeacher() {
    return (
 
        <VideoWrapper >
            <Link to="/"><LogoImg src={tuffyLogo} alt="logo" /></Link>
            <PlaneImg src={plane} />
            <div className="logo">
                <Img src={tuffyLogo} alt="tuffyLogo" />
            </div>
            <Sidebar />
            {/* <Footer /> */}
            <WordWrapper >
                <Title> PARENTS & TEACHERS</Title>
                <p>
                    Parents and teachers have an outstanding opportunity to teach and inspire a child when their curiosity is piqued and their imagination is stirred. 
                    This magic can be found in the adventures of Tuffy Tiger.  T. E. Young and the charitable community arts non-profit Puppetry Arts impacts thousands 
                of individuals each year infusing puppetry in programs that engage youth and families.  </p>
                <p>
                    Tuffy Tiger is a great example of that puppetry. Curious, outgoing, clever, and almost five, Tuffy Tiger is an appealing character that becomes 
                    an important confidant and friend to the many, 
                    many kids that he engages every day, helping them to explore the world around them. Discovering and learning along with Tuffy through art and music 
                    provide that same opportunity for you and your child emphasizing educational goals, healthy choices, and social principles. Tuffy’s experiences reinforce positive life lessons and habits for children through his honorable, endearing, and gentle nature. 
                </p>
                <p>
                    Below are a few Tuffytastic resources that promise to engage and inspire your young tigers! 
                </p>
                <Resources>
                    <TitleImg src= {newsletter} />
                    <P>
                That’s Tuffytastic Newsletter  (logo)
As an ambassador to parents and teachers, Tuffy Tiger helps to emphasize educational goals, healthy choices, and social principles through multimedia resources kids and parents love! 
Spark creativity and engage family fun with the Tuffytastic E-Newsletter and stay up-to-date on all Tuffy Tiger music, videos, crafts, and news!
                    </P>
                </Resources>
                <Resources>
                    <TitleImg src={titleCd} />
                   <P>
                    Tuffy Tiger’s first album filled with 10 fun and empowering songs including 5 instrumentals perfect for classroom sing-a-longs. Purchase the album through these stores.

                    Download The Album’s Lyric Poster
                    </P>
                </Resources>
                <Resources>
                    <TitleImg src={puzzle} />

                    <P>
                        Tuffy Tiger’s Puzzle Game  ( with pic)
                         
                        Colorful puzzles featuring the almost five Tuffy Tiger! Easy to slide into place using silhouette photo in the background with playful music and sounds!

                        Free Google Play Download
                </P>
                </Resources>
                <Resources>
                    <TitleImg src={jellybean} />
                    <P>
                        Tuffy Tiger’s Jelly Bean Jam! (With Pic)
                        Tuffy Tiger can't wait for you to try out Jelly Bean Jam! It's a game filled with action and strategy making it fun for all ages!

                        Free Google Play Download

                        https://play.google.com/store/apps/details?id=com.cleanclone&hl=en&gl=US
                </P>
                </Resources>
                <Resources>
                <p>
                        Tuffy Tiger Worksheets 
                        From puppet making to games to drawing and coloring, these worksheets provide young tigers with opportunities to play, think, and create!

                        View & Download (worksheet page link)
                </p>
                </Resources>
                <Resources>
                    <TitleImg src={sendmail} />
                Letters To Tuffy
                Following standards found within STEAM, teachers are encouraged to empower students to write letters to Tuffy expressing their thoughts and feelings through words and coloring pictures about their experience watching Tuffy’s videos, singing with Tuffy, or making puppets and crafts. 

                All letters, as a class, will receive a reply from Tuffy with a Tuffytastic surprise for each student! 

                Download Letter (letter link here- it should be in the download worksheet page)
                </Resources>
<div class="ctct-inline-form" data-form-id="3fd6f4db-243b-48d4-9612-f01ceebebae0"></div>

            </WordWrapper>

        </VideoWrapper>
    );
}

export default ParentTeacher;