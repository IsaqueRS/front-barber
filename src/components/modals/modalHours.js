import { useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import "./modalHours.css"
import { ModalBody } from 'react-bootstrap';
import PaginationComp from '../pagination' 
import { addDays, format, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import api from '../../services/api'


function ModalHour({ showModal, closeModal, barberId }) {
  const [activeButton, setActiveButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const datesPerPage = 5;
  const handleButtonClick = (buttonId) => {
    console.log({barberId})
    setActiveButton(buttonId);
  };
  const [events, setEvents] = useState([])


  const handleDayClick = async (date) => {
    try {
      const response = await axios.get(`/sua-rota-da-api/${date}`); // Altere a rota da API de acordo com o seu backend
      const eventsData = response.data; // Supondo que a API retorna os eventos para um determinado dia
      setEvents(eventsData);
      setCurrentPage(0); // Reinicia a página ao selecionar um novo dia
    } catch (error) {
      console.error(`Erro ao buscar dados para ${date}:`, error);
    }
  };

  const getNext15Days = () => {
    const dates = [];
    const today = new Date();
  
    for (let i = 0; i < 15; i++) {
      const date = addDays(today, i);
      let formattedDate;
      if (i < 5) {
        // Para os primeiros 5 dias, formatamos como "seg", "ter", "qua" etc.
        formattedDate = format(date, 'EEEE', { locale: ptBR });
      } else {
        // Para os demais dias, formatamos como "dd/MM".
        formattedDate = format(date, 'dd/MM', { locale: ptBR });
      }
      dates.push({ date: formattedDate });
    }
    return dates;
  };  

  const next15Days = getNext15Days();
  // current days tutorial
  const indexOfLastDay = currentPage * datesPerPage
  const indexOfFirstDay = indexOfLastDay - datesPerPage
  const currentDates = next15Days.slice(indexOfFirstDay, indexOfLastDay)

  return (
//    <>
//      <Button variant="primary" onClick={handleShow}>
//       Launch demo modal
//      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Horários</Modal.Title>
        </Modal.Header>
        <ModalBody>
        <div className="daysbox">
          <PaginationComp currentDates={currentDates} postsPerDay={datesPerPage} onDayClick={handleDayClick}/>
        </div>
        </ModalBody>
        <Modal.Body>
          <div className="list-times-container">
          <ul className='list-times'>
          {events.map((event, index) => (
            <li>
            <button
            key={index}
            className={activeButton === index ? 'active-button' : 'custom-button'}
            onClick={() => handleButtonClick(index)}
          >
            {event.time}
          </button>
          </li>
          ))}
          </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Agendar
          </Button>
        </Modal.Footer>
      </Modal>
//    </>
  );
}

export default ModalHour;