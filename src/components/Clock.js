import React, { useEffect } from 'react';
import "../styles/clock.scss";

const Clock = () => {
    useEffect(() => {
        function setarData() {
            let elementoData = document.querySelector(".js-data");
          
            let data = new Date();
          
            const objData = {
              year: "numeric",
              month: "long",
              weekday: "long",
              day: "numeric",
            };
          
            elementoData.textContent = data.toLocaleTimeString("En", objData);
          }
          setarData();
          setInterval(() => {
            setarData();
          }, 1000);
    })
    return (
        <div className="conteudo">
            <div className="relogio">
                <h4 className="js-data"></h4>
            </div>
            <span></span>
            <span></span>
        </div>
    );
};

export default Clock;