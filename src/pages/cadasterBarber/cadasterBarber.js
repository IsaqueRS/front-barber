import { React, useState } from 'react'
import * as Components from './cadasterBarberStyle'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import barberSvg from "../../static/barber.svg"

export default function CadasterBarber() {

    const navigate = useNavigate();

    const continueClick = () => {
        navigate('/home');
      };

  return (
        <Components.Container>
            <Components.divLeft>
                <Components.Title>
                    Cadastre os Barbeiros
                </Components.Title>
                <Components.divSvg>
                  <img src={barberSvg}/>
                </Components.divSvg> 
                
            </Components.divLeft>
            <Components.divRight>
            <Components.Button onClick={continueClick}>Continuar</Components.Button>
            </Components.divRight>
        </Components.Container>
)
}
