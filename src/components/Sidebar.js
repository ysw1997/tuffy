import React ,{useState} from 'react';
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
  height: 140px;
   place-items: center;
  overflow-y: auto;
  z-index: 1003;
  position: relative;
  display: fixed;
  flex-direction: column;
  margin:10px;
  border-radius: 15px;
`
{/* 
  

function DetectHover(props){
  const [hover,sethover] = useState(false)
  return(
    <div
      onMouseOver={()=> sethover(true)}
      onMouseDown={()=> sethover(false)}
    >
      {props.render(hover)}
    </div>
  )
};
function Siderbar(props){
  function render(hover){
    const style = {
      src : hover? musicStatic:musicActive
    };
    return (
      <div></div>
    )

  }
}
*/}


const Sidebar =() =>{

return(
    <Wrapper>
            
            <Model to="/music">
              <img class="static" src={musicStatic} alt='music' />
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