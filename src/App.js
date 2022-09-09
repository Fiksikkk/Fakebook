import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

const App = (props) => {
    return (
        <div className='appWrapper'>
            <HeaderContainer/>
            <Navbar/>
            <Content/>
        </div>
    );
}


export default App;
