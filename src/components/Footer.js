import React from 'react'
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';



function Footer() {
const Footer= styled.h5`
background-color:#8DF67B;
position: fixed;
bottom: 0;
width: 100%;
height: 12rem;  
-webkit-border-top-left-radius:15px;
-webkit-border-top-right-radius:15px;
align-items: center;

`;

const Lefttext= styled.h5`
font
margin-top: 18px;
margin-left:20px;
text-align:left;

`;

const Righttext= styled.h5`
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
  type='Facebook'
/>
<SocialIcon
  type='facebook'
/>

<SocialIcon
  type='linkedin'
/>
<SocialIcon
  type='facebook'
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
