import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
position: absolute;
display: flex;
flex-wrap: nowrap;
width: 100%;
max-width: 100%;
min-height: 100%;
margin: 0 auto;
`;

export const divLeft = styled.div`
  background: -webkit-linear-gradient(to right, #003262, #2072AF);
  background: linear-gradient(to right, #003262, #2072AF);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  color: #fff;
  padding: 50px 25px;
  min-height: 100%;
  width: 28%;
`;

export const divRight = styled.div`
  min-height: 100%;
  width: 72%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 50px 25px 25px 25px;
  background-color: #fff;
  gap: 20px;
`;

export const cardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
`;

export const cardDiv = styled.div`
  position: relative;
`;

export const photo = styled.img`
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const changePicDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: rgba( 0, 0, 0, 0.6);
  opacity: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 3;
  cursor: pointer;
  transition: opacity 90ms ease-in;
  &:hover{
    opacity: 100%;
  }
`;

export const cardImage = styled.div`
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  left: 40%;
  transform: translatex(-50%);
  width: 154px;
  height: 154px;
  cursor: pointer;
  z-index: 2;
`;

export const barberDiv = styled.div`
  position: relative;
  background-color: #ffffff;
  border: none; 
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  margin: 125px 0 0 0;
  width: 250px;
  height: 270px;
`;

export const cardBarberInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 35px 10px;
`;

export const inputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 15px;
`;

export const inputsContainerFirst = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 15px;
`;

export const divRightContainerTime = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const divSvg = styled.div`
  margin: 135px 0;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
width: 100%;
`;

export const ButtonDefault = styled.button`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  max-width: 100px;
  max-height: 53px;
  margin: 8px 0;
  transition: transform 80ms ease-in;
  &:active{
      transform: scale(0.95);
  }
`;

export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #003262;
   background-color: #003262;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   align-self: flex-end;
   margin-top: auto;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;

export const TimePicker = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
max-width: 107px;
max-height: 53px;
`;

export const Title = styled.h1`
font-weight: 700 !important;
margin: 0;
`;

export const subTitle = styled.p`
  font-size: 25px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0px 0px
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;

