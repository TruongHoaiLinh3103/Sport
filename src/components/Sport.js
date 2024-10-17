import React from 'react';
import "../styles/sport.scss";
import { BODY } from '../stories/BODY';
import { PARKOUR } from '../stories/PARKOUR';
import { useNavigate } from 'react-router-dom';

const Sport = () => {
    const router = useNavigate();
    return (
        <div className='Sport'>
            {window.location.pathname === "/parkour" && 
                <nav className='Sport-body'>
                    {PARKOUR.map((item) => {
                        return(
                            <ul key={item.id}>
                                <li>{item.name}</li>
                                {item.quantity ? <span>{item.quantity}</span> : <span>{item.duration}</span>}
                            </ul>
                        )
                    })}
                </nav>
            }

            {window.location.pathname === "/kungfu" && 
                <nav className='Sport-body'>
                    {BODY.map((item) => {
                        return(
                            <ul key={item.id}>
                                <li>{item.name}</li>
                                {item.quantity ? <span>{item.quantity}</span> : <span>{item.duration}</span>}
                            </ul>
                        )
                    })}
                </nav>
            }
            <span className='Sport-Home' onClick={() => router("/")}><i className="fa-solid fa-house"></i></span>
        </div>
    );
};

export default Sport;