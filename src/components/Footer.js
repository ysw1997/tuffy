import React from 'react'
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import './Sidebar.css'



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
position: relative;
margin: 0 auto 0 auto;
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
className="my-social-icon"
bgColor = 'transparent'
  onClick={toFacebook}
  fgColor = 'black'
  network="facebook"
/>


<SocialIcon
className="my-social-icon"
bgColor = 'transparent'
fgColor = 'black'
onClick ={toYoutube}
  network='youtube'
/>

<SocialIcon
className="my-social-icon"
bgColor = 'transparent'
fgColor = 'black'
  onClick={toInstagram}
  network="instagram"
/>


<SocialIcon
bgColor = 'transparent'
fgColor = 'black'
className="my-social-icon"
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
