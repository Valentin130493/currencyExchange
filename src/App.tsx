import React, {useEffect, useRef, useState} from 'react';


import Block from "./components/block";

import './App.css';


function App() {

    return (
        <div className="App">
            <Block from={true}/>
            <Block from={false}/>
        </div>
    );
}

export default App;
