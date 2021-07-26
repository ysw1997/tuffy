import React, {useState} from 'react';
import './Art.css';
import { Link } from 'react-router-dom';
import { ChildPageWrapper } from './Music'
import Footer from '../components/Footer'
import tuffyLogo from '../assets/images/header/tuffy_logo.png'
import Sidebar from '../components/Sidebar'
import WorkSheet from '../components/workSheet'


import styled from "styled-components";
import { Img } from './Home'
import 'tippy.js/dist/tippy.css'


import Makeicon1 from '../assets/images/pictures/makeicon1.jpeg'
import Makeicon2 from '../assets/images/pictures/makeicon2.jpeg'
import Makeicon3 from '../assets/images/pictures/makeicon3.jpeg'
import Makeicon4 from '../assets/images/pictures/makeicon4.jpeg'
import Makeicon5 from '../assets/images/pictures/makeicon5.jpeg'
import Makeicon6 from '../assets/images/pictures/makeicon6.jpeg'
import OriginalLogo from '../assets/images/pictures/tuffyCraft.png'

// import Step1 from '../assets/images/pictures/step1.jpeg'
// import Step2 from '../assets/images/pictures/step2.jpeg'
// import Step3 from '../assets/images/pictures/step3.jpeg'
// import Step4 from '../assets/images/pictures/step4.jpeg'







import $ from 'jquery';

export const Image= styled.img`
    height: 700px;
    width: 520px;
    font-size: 0px;
    
    background:rgba(255, 255, 255, 0.589);
    margin-left: 0px;
    margin-top: 0x;
    margin-bottom: 0px;

    line-height: 100px;
    -webkit-border-top-left-radius:15px;
    -webkit-border-top-right-radius:15px; 
    -webkit-border-bottom-right-radius:15px; 
    -webkit-border-bottom-left-radius:15px; 
    `;
    export const Image3= styled.img`
    height: 300px;
    width: 450px;
    font-size: 25px;
    background:rgba(255, 255, 255, 0.589);
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    line-height: 100px;
    -webkit-border-top-left-radius:15px;
    -webkit-border-top-right-radius:15px; 
    -webkit-border-bottom-right-radius:15px; 
    -webkit-border-bottom-left-radius:15px; 
    `;


export const Image1= styled.img`
    height: 260px;
    width: 260px;
    font-size: 25px;
    background:rgba(255, 255, 255, 0.589);
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    line-height: 100px;
    -webkit-border-top-left-radius:15px;
    -webkit-border-top-right-radius:15px; 
    -webkit-border-bottom-right-radius:15px; 
    -webkit-border-bottom-left-radius:15px; 
    `;











const Wrapper = styled(ChildPageWrapper)`
background-color: #CAFAC3;
overflow-y:scroll
`
const Header =styled.h1`
position:relative;
margin-right:-450px;
margin-top:10px;
margin-bottom:10px;
font-size:30px;
color: orange;

`
const Header2 =styled.h1`
position:relative;
margin-right:-250px;
margin-top:10px;
margin-bottom:10px;
font-size:30px;
color: orange;

`






    function scroll1 (direction){
      let far = $( '.image-container2' ).width()/2*direction;
      let pos = $('.image-container2').scrollLeft() + far;
      $('.image-container2').animate( { scrollLeft: pos }, 1000)
    };

function Art() {
    const [active, setactive] = useState("originalLogo");
    const [show, setShow] = useState(false);
    return (

      <div>
        <Wrapper >
        Arts
        <Link to="/">Home</Link>
        <div className="logo">
          <Img src={tuffyLogo} alt="tuffyLogo" />
        </div>

<Header>
Puppet Making Fun!
</Header>
{active === "originalLogo" &&<Image3 src = {OriginalLogo}/>}
{active === "firstWorksheet" && <WorkSheet /> }
{active === "secondWorksheet" && <workSheet2 /> }
{active === "thirdWorksheet" && <workSheet3 /> }
{active === "fourthWorksheet" && <workSheet4 /> }
{active === "fifthWorksheet" && <workSheet5 /> }
{active === "sixthWorksheet" && <workSheet6 /> }





      

    <Header2>
Download Tuffytastic Worksheets!
</Header2>

    <div className="main">

<div className="wrapper">
<a className="prev" onClick={scroll1.bind(null,-1)}>&#10094;</a>
  <div className="image-container2">
    <div className ="Imageandbutton">       
         <Image1 onClick={()=>setactive("firstWorksheet")} className = "Image"  src ={Makeicon1} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}/>
         

         <div>{show && (<button className="handl btn " >
            Click to download the worksheet
          </button>) }
          </div>
    </div>

          <Image1 onClick={()=>setactive("secondWorksheet")} className = "Image"  src ={Makeicon2}/>
          <Image1 onClick={()=>setactive("thirdWorksheet")} className = "Image"  src ={Makeicon3}/>
          <Image1 onClick={()=>setactive("fourthWorksheet")} className = "Image"  src ={Makeicon4}/>
          <Image1 onClick={()=>setactive("fifthWorksheet")} className = "Image"  src ={Makeicon5}/>
          <Image1 onClick={()=>setactive("sixthWorksheet")} className = "Image"  src ={Makeicon6}/>
  </div>
  <a className="next" onClick={scroll1.bind(null,1)}>&#10095;</a>
</div>

</div>
        <Sidebar />
        <Footer />
        </Wrapper>
      </div>

    
    );
  }

export default Art;