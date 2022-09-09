import React from "react";
import preloader from "../../../assets/Images/loader.gif";


let Preloader = (props) => {
    return <div style={{ backgroundColor: 'white' }}>
        <img src={preloader} style={{ height: '50px'}}/>
    </div>
}

export default Preloader;