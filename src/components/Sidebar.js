import React from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';
import './Sidebar.css'
import arleeActive from '../assets/sidebarIcon/arleeActive.gif'
import arleeStatic from '../assets/sidebarIcon/arleeStatic.png'
import createActive from '../assets/sidebarIcon/createActive.gif'
import createStatic from '../assets/sidebarIcon/createStatic.png'
import playActive from '../assets/sidebarIcon/playActive.gif'
import playStatic from '../assets/sidebarIcon/playStatic.png'
import musicActive from '../assets/sidebarIcon/musicActive.gif'
import musicStatic from '../assets/sidebarIcon/musicStatic.png'

const Wrapper = styled.div`

width:200px;
float:right;
  position: fixed;
  top: 9%;
  right:0px;
  padding:20px;
  z-index: -1;
   animation: 0.5s ease-in-out;
`

const Model = styled(Link)`
background-color:#FF7990;
 width: 150px;
  height: 140px;
   place-items: center;
  overflow-y: auto;
  z-index: 1;
  position: relative;
  display: fixed;
  flex-direction: column;
  margin:10px;
  border-radius: 15px;
`

const Sidebar =() =>{

return(
    <Wrapper>
            
            <Model to="/music">
              <img class="static" src={musicStatic} alt='music' />
              {/* <div class='active'>Sing</div> */}
              <img class="active" src={musicActive} alt='music' />
              </Model>
            <Model to="/videos">
              <img class="static" src={arleeStatic} alt='video' />
              <img class="active" src={arleeActive} alt='video' />
            </Model>
            <Model to="/games">
              <img class="static" src={playStatic} alt='games' />
              <img class="active" src={playActive} alt='games' />
            </Model>
            <Model to="/art">
              <img class="static" src={createStatic} alt='create' />
              <img class="active" src={createActive} alt='create' />
            </Model>
    </Wrapper>
)

};

export default Sidebar;