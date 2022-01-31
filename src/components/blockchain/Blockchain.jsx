import "./blockchain.scss"
import useMetaMask from '../../hooks/metamask';
import { useEffect, useRef } from "react";
import { init } from 'ityped'



/** METAMASK ICON  */
//npm install @metamask/logo
const ModelViewer = require('@metamask/logo');

// To render with fixed dimensions:
const viewer = ModelViewer({
// Dictates whether width & height are px or multiplied
pxNotRatio: true,
width: 4000,
height: 3000,

// To make the face follow the mouse.
followMouse: true,
// head should slowly drift (overrides lookAt)
slowDrift: false,
});
/** METAMASK ICON END */




export default function Blockchain() {
    const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()


    // ** Add the Metamask Obj to the imgContainer AFTER it loads. */
    useEffect(() => {
    let container = document.getElementById('imgContainer');
    if (container) {
        console.log(container);
        container.insertBefore(viewer.container, container.firstChild); //Adds the Model BEFORE the container
        //container.appendChild(viewer.container);  //Adds the Model AFTER the container
    }
    },[]);

    const textRef = useRef();
    useEffect(()=>{
    init(textRef.current, { 
        showCursor: true,
        typeSpeed: 100,
        backDelay:1500,
        backSpeed:60,
        cursorChar: " |",
        strings: [' Click the Fox to connect to Metamask',' This will show your Wallet Address',' You need to have the Extension installed' ] })
    },[])




    return <div className='blockchain' id='blockchain'>

        
        
        
        <div className="right"> 
            <div className="wrapper">
                <h2>Full-Stack</h2>
                <h1>Blockchain</h1>
                <h3>Development</h3>
                <a href="#contact">
                <img src="assets/arrow.png" alt=""/></a>
            </div>
            
        </div>
        <div className="left"> 
            
            <h3><span ref={textRef}></span></h3>
            <p><br>{/** Empty for the sake of good looking Front-End*/}</br></p>   
                    
            {/* If Wallet is Active, Disconnect. If it's not active, Connect */}
            <div className="imgContainer" id="imgContainer" onClick={ isActive ? disconnect : connect} disabled={shouldDisable}>


                {/* Old Static MetaMask Image */}
                {/* <img id="logo-container" src="assets/metamask.svg" onClick={connect} disabled={shouldDisable} alt="" /> */}       
                <div className="imgContainer" >
                     
                    <h2 > { isActive ? 'Wallet Address: ' + account : 'No Wallet Connected' }    </h2> 
                    
                </div>

            </div>


        </div>


  </div>;
}
