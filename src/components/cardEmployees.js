import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea}  from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import image from '../static/download.jpeg';
import ModalHour from './modals/modalHours';

export default function CardBarber(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} onClick={handleOpenModal}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt="barber" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ModalHour showModal={modalOpen} closeModal={handleCloseModal} barberId={props.barberId}/>
    </div>

  );
}
