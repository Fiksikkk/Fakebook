import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <Content state={props.state}
                     dispatch={props.dispatch} />
        </div>
    );
}


export default App;
