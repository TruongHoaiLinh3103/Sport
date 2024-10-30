import React from 'react';
import "../styles/sport.scss";
import { BODY } from '../stories/BODY';
import { PARKOUR } from '../stories/PARKOUR';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { EDIT_PARKOUR, EDIT_BODY, EDIT_MIU } from '../redux/reduccer/rootSport';

const Sport = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
    const Body = useSelector((state) => state.sport.Body);
    const Parkour = useSelector((state) => state.sport.Parkour);
    const editBody = (id) => {
        dispatch(EDIT_BODY(id));
    }
    const editParkour = (item) => {
        dispatch(EDIT_PARKOUR(item.id))
        if(item.duration){
            dispatch(EDIT_MIU(110))
            router("/")
        }else{
            dispatch(EDIT_MIU(0))
        }
    }
    return (
        <div className='Sport'>
            {window.location.pathname === "/parkour" && 
                <nav className='Sport-body'>
                    {PARKOUR.map((item) => {
                        return(
                            <ul key={item.id} className={Parkour === item.id ? "Sport-select" : ""} onClick={() => editParkour(item)}>
                                <li>{item.id + 1}.{item.name}</li>
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
                            <ul key={item.id} className={Body === item.id ? "Sport-select" : ""} onClick={() => editBody(item.id)}>
                                <li>{item.id + 1}.{item.name}</li>
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