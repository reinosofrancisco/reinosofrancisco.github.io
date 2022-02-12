import "./blockchain.scss"

import { useEffect } from "react";




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



    // ** Add the Metamask Obj to the imgContainer AFTER it loads. */
    useEffect(() => {
    let container = document.getElementById('imgContainer');
        if (container) {
            console.log(container);
            container.insertBefore(viewer.container, container.firstChild); //Adds the Model BEFORE the container
            //container.appendChild(viewer.container);  //Adds the Model AFTER the container
        }
    },[]);






    return <div className='blockchain' id='blockchain'>
        
        <div className="right"> 
            <div className="wrapper">
                <h2>Full-Stack</h2>
                <h1>Blockchain</h1>
                <h3>Development</h3>
                <a href="#portfolio">
                <img src="assets/arrow.png" alt=""/></a>
            </div>
        </div>

        <div className="left"> 
            
            <p><br>{/** Empty for the sake of good looking Front-End*/}</br></p>   
                    
            {/* If Wallet is Active, Disconnect. If it's not active, Connect */}
            <div className="imgContainer" id="imgContainer" >
            </div>
            
            <div className="staticImgContainer">
                
                <img src="assets/static_fox.png" alt="" />
                <h2 className="staticText"> 3D in Browser</h2>
                
            </div>


        </div>

        <p><br>{/** Empty for the sake of good looking Front-End*/}</br></p>  
        <p><br>{/** Empty for the sake of good looking Front-End*/}</br></p>  
        <p><br>{/** Empty for the sake of good looking Front-End*/}</br></p>  
        <a className="mobile_only_arrow" href="#portfolio">
            <img src="assets/arrow.png" alt=""/>
        </a>


  </div>;
}
