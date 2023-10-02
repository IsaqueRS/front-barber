import { React, useState, useRef } from 'react'
import * as Components from './cadasterBarberStyle'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import barberSvg from "../../static/barber.svg"
import userImage from "../../static/user.png"
import cardCadasterBarber from '../../components/cardCadasterBarber';

export default function CadasterBarber() {

    const navigate = useNavigate();
    const inputref = useRef(null);
    const [image, setImage] = useState("");
    const inputRefs = useRef([]);
    const [barbeiros, setBarbeiros] = useState([]);

    const continueClick = () => {
        navigate('/home');
      };

    const handleClickImage = () => {
        inputref.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        console.log(file)
        setImage(event.target.files[0])
    }

    const handleInputChange = (index, key, value) => {
        const newBarbeiro = { ...barbeiros[index], [key]: value };
        const updatedBarbeiros = [...barbeiros];
        updatedBarbeiros[index] = newBarbeiro;
        setBarbeiros(updatedBarbeiros);
    }

  return (
    <Components.Container>
        <Components.divLeft>
            <Components.Title>
                Cadastre os Barbeiros
            </Components.Title>
            <Components.divSvg>
                <img src={barberSvg} alt="Barber" />
            </Components.divSvg>
        </Components.divLeft>
        <Components.divRight>
            <Components.cardsContainer>
                {barbeiros.map((barbeiro, index) => (
                    <cardCadasterBarber
                        key={index}
                        barbeiro={barbeiro}
                        index={index}
                        onImageChange={handleImageChange}
                        onInputChange={handleInputChange}
                    />
                ))}
            </Components.cardsContainer>
            <Components.Button onClick={continueClick}>Continuar</Components.Button>
        </Components.divRight>
    </Components.Container>
)
}
