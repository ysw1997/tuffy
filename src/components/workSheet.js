import React from 'react'
import '../routes/Art.css';

import styled from "styled-components";
import $ from 'jquery';

import Step11 from '../assets/images/pictures/step2.jpg'
import Step12 from '../assets/images/pictures/step3.jpg'
import Step13 from '../assets/images/pictures/step4.jpg'

const Image= styled.img`
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
function scroll (direction){
        let far = $( '.image-container' ).width()/2*direction;
        let pos = $('.image-container').scrollLeft() + far;
        $('.image-container').animate( { scrollLeft: pos }, 1000)
      };


const workSheet= ()=> {
    return (
        <div className = "wk">
   
                    <div className="image-container"> 
                    <a className="prev1" onClick={scroll.bind(null,-1)}>&#10094;</a> 
        <div>
       
        <Image  src ={Step11}/>
        </div>
        <div className="text1"  >
        <h1>Paper Owl Puppets</h1>
<p>Its a HOOT of a puppet!  </p>    
<h2>Supplies:</h2>
<li> 1 Paper bag</li>
<p>3 (three) 8x11 sheets of card stock paper (or construction/craft paper)</p>
<p>1 (one) Black</p>
<p>1 (one) Yellow or Orange</p>
<p>1 (one) Brown, Red, or Grey</p>
<p>Crayons</p>
<p>1 glue stick</p>
<p>1 Cup</p>
<p>1 pair of safety scissors</p>
<h2>Project Time:</h2>
<p>25 minutes prep</p>
<p>5 minutes dry time</p>
<h2>Grownups Note:</h2>
<p>Grownups help with cutting and tracing.</p>

         </div>
         <a className="next1" onClick={scroll.bind(null,1)}>&#10095;</a> 
         </div>




        </div>
        
    )
}

export default workSheet;
