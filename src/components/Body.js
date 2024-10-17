import React from 'react';
import "../styles/body.scss";
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const router = useNavigate();
    return (
        <div className='Body'>
            <div className='Body-c'>
                <div className='Body-Image'>
                    <div className="card" onClick={() => router("/parkour")}>
                        <svg height="100%" width="100%" className="border" xmlns="http://www.w3.org/2000/svg">
                            <line y2="0" x2="600" y1="0" x1="0" className="top"></line>
                            <line y2="-960" x2="0" y1="320" x1="0" className="left"></line>
                            <line y2="320" x2="-600" y1="320" x1="200" className="bottom"></line>
                            <line y2="960" x2="200" y1="0" x1="200" className="right"></line>
                        </svg>
                        <div className="logo">
                            <img src='https://i.pinimg.com/originals/5e/40/52/5e4052b3a79cf714d70d7d3ee238e667.jpg' alt='Parkour'/>
                        </div>  
                    </div>
                    <div className="card" onClick={() => router("/kungfu")}>
                        <svg height="100%" width="100%" className="border" xmlns="http://www.w3.org/2000/svg">
                            <line y2="0" x2="600" y1="0" x1="0" className="top"></line>
                            <line y2="-960" x2="0" y1="320" x1="0" className="left"></line>
                            <line y2="320" x2="-600" y1="320" x1="200" className="bottom"></line>
                            <line y2="960" x2="200" y1="0" x1="200" className="right"></line>
                        </svg>
                        <div className="logo">
                            <img src='https://i.pinimg.com/originals/c3/99/fa/c399fa146b7657a4e2f81065bf2a4006.jpg' alt='Body'/>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;