import { React, useState } from 'react';
import ButtonAppBar from '../components/appbar';
import CardBarber from '../components/cardEmployees';
import { Grid } from 'semantic-ui-react';
import * as Components from './Register/components_register'

function UserClientScreen({ user }) {

  const horarios = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

  return (
    <div>
      <ButtonAppBar user={user}/>
      <div style={{ backgroundColor: '#fffff', color: '#000000', padding: '20px', fontFamily: 'sans-serif' }}>
        <Components.Title>é a barbearia do: {user.nome}!</Components.Title>
        <p>Bem-vindo(a) à barbearia {user.nome_barbearia}.</p>
        <Grid>
          <CardBarber barberId={user.id} image="image" name="Carl Johnson" description="oh nigga get out of the way - cj"></CardBarber>
        </Grid>
      </div>
    </div>
  );
}

export default UserClientScreen;
