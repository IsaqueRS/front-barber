import { React, useState, useRef } from 'react'
import * as Components from './cadasterBarberStyle'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import barberSvg from "../../static/barber.svg"
import userImage from "../../static/user.png"

export default function CadasterBarber() {

    const navigate = useNavigate();
    const inputref = useRef(null);
    const [image, setImage] = useState("");

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
                <Components.cardsContainer>
                    <Components.cardDiv>
                        <Components.cardImage>
                            <Components.changePicDiv onClick={handleClickImage}>
                                <Components.Paragraph>
                                    Carregar Foto
                                </Components.Paragraph>
                            </Components.changePicDiv>
                            {image ? <Components.photo src={URL.createObjectURL(image)}></Components.photo> : <Components.photo src={userImage}></Components.photo>}                            
                            <input type="file" ref={inputref} onChange={handleImageChange} style={{display: "none"}}/>
                        </Components.cardImage>
                        <Components.barberDiv>
                            <Components.cardBarberInputs>
                                <Components.Input placeholder="Nome"></Components.Input>
                                <Components.Input placeholder="Email" type="email"></Components.Input>
                            </Components.cardBarberInputs>                            
                        </Components.barberDiv>
                    </Components.cardDiv>
                    <Components.cardDiv>
                        <Components.cardImage>
                            <Components.photo src={userImage}></Components.photo>
                        </Components.cardImage>
                        <Components.barberDiv>
                            <Components.cardBarberInputs>
                                <Components.Input placeholder="Nome"></Components.Input>
                                <Components.Input placeholder="Email" type="email"></Components.Input>
                            </Components.cardBarberInputs>
                        </Components.barberDiv>
                    </Components.cardDiv>
                    <Components.cardDiv>
                        <Components.cardImage>
                            <Components.photo src={userImage}></Components.photo>
                        </Components.cardImage>
                        <Components.barberDiv>
                            <Components.cardBarberInputs>
                                <Components.Input placeholder="Nome"></Components.Input>
                                <Components.Input placeholder="Email" type="email"></Components.Input>
                            </Components.cardBarberInputs>
                        </Components.barberDiv>
                    </Components.cardDiv>
                    <Components.cardDiv>
                        <Components.cardImage>
                            <Components.photo src={userImage}></Components.photo>
                        </Components.cardImage>
                        <Components.barberDiv>
                            <Components.cardBarberInputs>
                                <Components.Input placeholder="Nome"></Components.Input>
                                <Components.Input placeholder="Email" type="email"></Components.Input>
                            </Components.cardBarberInputs>
                        </Components.barberDiv>
                    </Components.cardDiv>
                    <Components.cardDiv>
                        <Components.cardImage>
                            <Components.photo src={userImage}></Components.photo>
                        </Components.cardImage>
                        <Components.barberDiv>
                            <Components.cardBarberInputs>
                                <Components.Input placeholder="Nome"></Components.Input>
                                <Components.Input placeholder="Email" type="email"></Components.Input>
                            </Components.cardBarberInputs>
                        </Components.barberDiv>
                    </Components.cardDiv>
                    <Components.cardDiv>
                        <Components.cardImage>
                            <Components.photo src={userImage}></Components.photo>
                        </Components.cardImage>
                        <Components.barberDiv>
                            <Components.cardBarberInputs>
                                <Components.Input placeholder="Nome"></Components.Input>
                                <Components.Input placeholder="Email" type="email"></Components.Input>
                            </Components.cardBarberInputs>
                        </Components.barberDiv>
                    </Components.cardDiv>
                    <Components.cardDiv>
                        <Components.cardImage>
                            <Components.photo src={userImage}></Components.photo>
                        </Components.cardImage>
                        <Components.barberDiv>
                            <Components.cardBarberInputs>
                                <Components.Input placeholder="Nome"></Components.Input>
                                <Components.Input placeholder="Email" type="email"></Components.Input>
                            </Components.cardBarberInputs>
                        </Components.barberDiv>
                    </Components.cardDiv>
                    <Components.cardDiv>
                        <Components.cardImage>
                            <Components.photo src={userImage}></Components.photo>
                        </Components.cardImage>
                        <Components.barberDiv>
                            <Components.cardBarberInputs>
                                <Components.Input placeholder="Nome"></Components.Input>
                                <Components.Input placeholder="Email" type="email"></Components.Input>
                            </Components.cardBarberInputs>
                        </Components.barberDiv>
                    </Components.cardDiv>
                </Components.cardsContainer>
            <Components.Button onClick={continueClick}>Continuar</Components.Button>
            </Components.divRight>
        </Components.Container>
)
}
