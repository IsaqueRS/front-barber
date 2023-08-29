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
  padding: 50px 25px 25px 25px;
  background-color: #fff;
`;

export const divRightContainerTime = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: auto;
    padding-top: 20px;
`;

export const divSvg = styled.div`
  margin: 135px 0;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
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
height: 55px;
width: 105px;
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
  margin: 20px 0px 20px
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;

