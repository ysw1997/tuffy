import React from 'react';
import styled from 'styled-components';
import { navigate,Link } from '@reach/router';

const Wrapper = styled.div`

width: 30%;
min-width:200px;
  position: relative;
  top: 100px;
  left:70%;
  padding:20px;
`

const Model = styled.div`
background-color:#f5657f;
 width: 200px;
  min-height: 150px;
   place-items: center;

  overflow-y: auto;
  z-index: 1003;
  position: relative;
  display: fixed;
  flex-direction: column;
  margin:10px;
  border-radius: 15px;

 

`

const Sidebar =() =>{
    const navigateTo = link => {
        
        navigate(link);
    };
    

return(
    <Wrapper>
        <Model onClick={() => navigate('/create')} >Create</Model>
        <Model>
            
          
            </Model>
        <Model>Play</Model>
        <Model>Listen</Model>
    </Wrapper>
)

};

export default Sidebar;