import { Link } from "react-router-dom"
import {useState } from "react";
import './layout.css'

//Import React Icons//
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {

  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 1024 ? true : false);

  const closeNavHandler = () => {
    if(window.innerWidth < 1024){
      setIsNavShow(false)
    }else{
      setIsNavShow(true)
    }
  }

  
  const [theme, setTheme] = useState('light')
  const onThemeChange= ()=> {
    if (theme=='light'){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

 
  return (
    <nav className={theme=='light'?'light':'dark'}>
     <div className="container nav-container">
        <Link className="nav-logo" to={'/'} onClick={closeNavHandler}>
            <h3>My<span>Blog</span></h3>
        </Link>

        <div className="wrapper-one">
        <label className="switch">
          <input type="checkbox" onChange={onThemeChange}/>
          <span className="slider round"></span>
        </label>
        </div>

        { isNavShow && <ul className="nav-menu">
            <li><Link to={'/profile/id'} onClick={closeNavHandler}>Rony Roy</Link></li>
            <li><Link to={'/create'} onClick={closeNavHandler}>Create Posts</Link></li>
            <li><Link to={'/authors'} onClick={closeNavHandler}>Authors</Link></li>
            <li><Link to={'/logout'} onClick={closeNavHandler}>Logout</Link></li>
        </ul> }

        <button className="nav-toggle-button" onClick={()=> setIsNavShow(!isNavShow)}>
          {
            isNavShow ? <IoCloseSharp /> : <FaBars />
          }            
        </button>
     </div>
    </nav>
  )
}
