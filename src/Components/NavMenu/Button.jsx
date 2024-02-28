import React, { useState } from 'react'
import './NavMenu.css';
import NavMenu from './NavMenu';

function Button() {
const[menubutton,setMenuButton] = useState("Nav menu");
const [navbar,setNavbar] = useState();
    const navbarController =() =>{
        if(menubutton){
          setNavbar(<NavMenu/>);
          setMenuButton("");
        
        }else{
          setNavbar();
          setMenuButton("Nav menu");
        
        }
          }
  return (
    <div>
          <button onClick={navbarController}>
        {menubutton}
  </button>
  <div>
     {navbar}
  </div>
  </div>
  )
}

export default Button;