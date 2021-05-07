import React from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';


const Wrapper = styled.div`

width:200px;
float:right;
  position: absolute;
  top: -10px;
  right:0px;
  padding:20px;
  z-index: 1003;
   animation: 0.5s ease-in-out;
`

const Model = styled(Link)`
background-color:#FF7990;
 width: 150px;
  height: 125px;
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

return(
    <Wrapper>
            <Model to="/art">Art</Model>
            <Model to="/music">Music</Model>
            <Model to="/videos">Videos</Model>
            <Model to="/games">Games</Model>
    </Wrapper>
)

};

export default Sidebar;