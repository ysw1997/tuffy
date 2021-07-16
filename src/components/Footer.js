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
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 100px;
`;

const Lefttext= styled.div`

margin-top: 18px;
margin-left:20px;
text-align:left;

`;

const Righttext= styled.div`
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

  
Donate

Parent&Teacher
</Righttext>
        </Footer>
    )
}



export default Footer
