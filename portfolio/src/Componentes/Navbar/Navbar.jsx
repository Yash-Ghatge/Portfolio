
import { useRef, useState } from 'react'
import './Navbar.css'
import uderline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {

  const [menu,setMenu] =  useState("home")
  const menuRef = useRef()
  
  const openMenu =()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu =()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      
      <h1 className='nav-name'>Yash</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={uderline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src={uderline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<img src={uderline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>setMenu("project-section")}>Projects</p></AnchorLink>{menu==="project-section"?<img src={uderline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={uderline}/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact me</AnchorLink></div>
    </div>
  )
}

export default Navbar
