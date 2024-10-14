import React from 'react';
import Timer from '../components/Timer';
import Clock from '../components/Clock';
import "../styles/app.scss"
import Body from '../components/Body';

const App = () => {
    return (
        <div className='App'>
            <div className='App-body'>
                <Body/>
                <Timer/>
            </div>
            <Clock/>
        </div>
    );
};

export default App;