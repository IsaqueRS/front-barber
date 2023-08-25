import './Login.css';
import jwt_decode from 'jwt-decode'
import { React, useEffect, useState } from 'react'; 
import * as Components from '../Register/components_register'

function Login() {
  const [ userToken, setUserToken ] = useState({})

  function handleCallbackResponse(response) {
      var userObj = jwt_decode(response.credential)
      console.log(userObj)
      setUserToken(response.credential)
      console.log(userToken)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "73231770215-20si72r6ucnvvj87kmubfk33b6hb6qei.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
    { theme: "outlined", size: "large" }
    )
  }, [])

  return (
    <div className="login-container">
      <Components.Title>Bem-Vindo</Components.Title>
      <Components.Paragraph>Na Hora de Agendar Seu Corte</Components.Paragraph>
      <div id='signInDiv'></div>
    </div>
  );
}

export default Login;
