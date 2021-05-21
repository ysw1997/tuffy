import React from 'react'
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

function toFacebook () {
  window.open('http://Facebook.com/')
}
function toLinkedin () {
  window.open('http://Linkedin.com/')
}
function toYoutube () {
  window.open('http://Youtube.com/')
}
function toInstagram() {
  window.open('http://Instagram.com/')
}


function Footer() {
const Footer= styled.footer`
background-color:#8DF67B;
position: fixed;
font-size:10px;
bottom: 0;
width: 100%;
height: 8rem;  
-webkit-border-top-left-radius:15px;
-webkit-border-top-right-radius:15px;
align-items: center;

`;

const Lefttext= styled.footer`

margin-top: 18px;
margin-left:20px;
text-align:left;

`;

const Righttext= styled.footer`
text-align:right;
margin-top: 0px;
margin-right:90px;
`;



    return (
        <Footer>
            <Lefttext>
Text goes across or stacked NOT a pyramid
            </Lefttext>

 

<SocialIcon
  onClick={toFacebook}
  
  network="facebook"
/>

<SocialIcon
onClick ={toYoutube}
  network='youtube'
/>

<SocialIcon
  onClick={toInstagram}
  network="instagram"
/>
  

<SocialIcon
  onClick={toLinkedin}
  network="linkedin"
/>


<Righttext>
Legal 
</Righttext>
<Righttext>
  
Donate
</Righttext>
<Righttext>
Parent&Teacher
</Righttext>
        </Footer>
    )
}



export default Footer
