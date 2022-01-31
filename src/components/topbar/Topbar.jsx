import "./topbar.scss"
import {Person, Mail, GitHub} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return <div className={"topbar " + (menuOpen && "active")}>
    <div className="wrapper">
      <div className="left">
        
        <a href="#intro" className="logo">Home.</a>
        <a href="https://github.com/reinosofrancisco" rel="noopener noreferrer" target="_blank" className="logo"><GitHub className="logo"/></a>
        
        {/* npm add @material-ui/core 
            npm add @material-ui/icons
            https://mui.com/components/material-icons/
        */}
        <div className="itemContainer">
          <Person className="icon"/>
          <span> +54 9 221 420 6558 </span>
        </div>
        <div className="itemContainer">
          <Mail className="icon"/>
          <span> reinosofrancisco99@gmail.com</span>
        </div>
      </div>

      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>

        </div>
      </div>

    </div>
  </div>;
}
