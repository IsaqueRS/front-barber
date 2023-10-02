import { React, useState, useRef } from 'react'
import * as Components from '../pages/cadasterBarber/cadasterBarberStyle'

export default function cardCadasterBarber({barbeiro, index, onImageChange, onInputChange}) {
    <Components.cardDiv>
    <Components.cardImage>
      <Components.changePicDiv onClick={() => onImageChange(index)}>
        <Components.Paragraph>Carregar Foto</Components.Paragraph>
      </Components.changePicDiv>
      {barbeiro.image ? (
        <Components.photo src={URL.createObjectURL(barbeiro.image)}></Components.photo>
      ) : (
        <Components.photo src={userImage}></Components.photo>
      )}
      <input
        type="file"
        ref={(ref) => (inputRefs.current[index] = ref)}
        onChange={(event) => onImageChange(index, event)}
        style={{ display: "none" }}
      />
    </Components.cardImage>
    <Components.barberDiv>
      <Components.cardBarberInputs>
        <Components.Input
          placeholder="Nome"
          value={barbeiro.name || ""}
          onChange={(e) => onInputChange(index, "name", e.target.value)}
        ></Components.Input>
        <Components.Input
          placeholder="Email"
          type="email"
          value={barbeiro.email || ""}
          onChange={(e) => onInputChange(index, "email", e.target.value)}
        ></Components.Input>
      </Components.cardBarberInputs>
    </Components.barberDiv>
  </Components.cardDiv>

}