import { React } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as Components from './cadasterStyle'
import { useState } from "react";
import testsvg from "../../static/svgCadaster.svg"
import Select from 'react-select'
import { SelectDay } from "../../components/multiSelect";

const weekDays = [
  { value: 'Segunda', label: 'Segunda' },
  { value: 'Terça', label: 'Terça' },
  { value: 'Quarta', label: 'Quarta' },
  { value: 'Quinta', label: 'Quinta' },
  { value: 'Sexta', label: 'Sexta' },
]
const optionsForValue2 = [{ value: 'Sábado', label: 'Sábado' }]
const optionsForValue3 = [{ value: 'Domingo', label: 'Domingo' }]

function Cadaster() {

    const navigate = useNavigate();

    const [displayedCount, setDisplayedCount] = useState(0);
    const [ phone, setPhone ] = useState('')
    const [ street, setStreet ] = useState('')
    const [ addresNumber, setAddresNumber ] = useState('')
    const [ neighborhood, setNeighborhood ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')
    const [selectedDays, setSelectedDays] = useState(null);

    const [value1, setValue1] = useState([])
    const [value2, setValue2] = useState(optionsForValue2)
    const [value3, setValue3] = useState(optionsForValue3)

    const customStyles = {
        container: (provided, state) => ({
          ...provided,
          width: '28%',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#87787B', // Cor do texto do placeholder
          }),
        control: (provided, state) => ({
          ...provided,
          border: 'none',
          backgroundColor: '#eee',
          padding: '9px 6px',
          margin: '8px 0',
          borderRadius: '1px',
          boxShadow: state.isFocused ? '0 0 0 2px #212529' : null,
          '&:hover': {
            borderColor: state.isFocused ? '#212529' : '#aaa',
          },
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#3498db' : 'white',
          color: state.isSelected ? 'white' : '#333',
          '&:hover': {
            backgroundColor: state.isSelected ? '#3498db' : '#f0f0f0',
          },
        }),
        menu: (provided) => ({
          ...provided,
          border: '1px solid #ccc',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          width: '300px',
          zIndex: 1
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#003262', // Cor de fundo dos objetos selecionados
            color: '#fff',// Cor do texto dos objetos selecionados
          }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white', // Cor do texto dos rótulos dos objetos selecionados
        }),  
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'white', // Cor do ícone/remover dos objetos selecionados
            ':hover': {
              backgroundColor: '#2980b9', // Cor de fundo ao passar o mouse
              color: 'white', // Cor do ícone/remover ao passar o mouse
            },
          }),
      };

    const FetchCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '')
        console.log(cep)
        try {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(responseData => {
                setStreet(responseData.logradouro)
                setNeighborhood(responseData.bairro)
                setCity(responseData.localidade)
                setState(responseData.uf)
            })
        } catch (error){
            console.log(error)
        }
    }

    const formatPhone = (input) => {
        const cleanedInput = input.replace(/\D/g, '');

        if (cleanedInput.length === 11) {
            // Formato de celular (11 dígitos)
            return `(${cleanedInput.substring(0, 2)}) ${cleanedInput.substring(2, 3)} ${cleanedInput.substring(3, 7)}-${cleanedInput.substring(7, 11)}`;
        } else if (cleanedInput.length === 8) {
            // Formato de telefone fixo (8 dígitos)
            return `${cleanedInput.substring(0, 4)}-${cleanedInput.substring(4, 8)}`;
        } else {
            // Não se encaixa nos formatos conhecidos
            return input;
        }
    };

    const handlePhoneChange = (e) => {
        const formattedPhone = formatPhone(e.target.value);
        setPhone(formattedPhone);
    };

    const PlusDaysHoursContent = (value, setValue, daysOptions) => (
      <Components.divRightContainerTime>
      <SelectDay
                    multiple                    
                    options={daysOptions}
                    value={value}
                    onChange={o => setValue(o)}
                    />
        <Components.Paragraph style={{ padding: '0' }}>Início: </Components.Paragraph>
        <Components.TimePicker type="time"/>
        <Components.Paragraph style={{ padding: '0' }}>Fim: </Components.Paragraph>
        <Components.TimePicker type="time"/>
        <Components.Paragraph style={{ padding: '0' }}>Intervalo (opcional):</Components.Paragraph>
        <Components.TimePicker type="time"/>
        <Components.Paragraph style={{ padding: '0' }}></Components.Paragraph>
        <Components.TimePicker type="time"/>
        </Components.divRightContainerTime>
  );

    const continueClick = () => {
      console.log('continue');
      navigate('/cadaster-barber');
    };

    return (
        <Components.Container>
            <Components.divLeft>
                <Components.Title>
                    Preencha seus dados
                </Components.Title>
                <Components.divSvg>
                  <img src={testsvg}/>
                </Components.divSvg> 
                
            </Components.divLeft>
            <Components.divRight>
                <Components.subTitle>
                    Dados da Barbearia
                </Components.subTitle>
                <Components.inputsContainerFirst>
                  <Components.Input placeholder="Nome da Barbearia"></Components.Input>
                  <Components.Input  
                      onChange={handlePhoneChange}
                      value={phone}
                      placeholder="Telefone da Barbearia">
                  </Components.Input>
                </Components.inputsContainerFirst>
                <Components.subTitle>
                    Endereço da Barbearia
                </Components.subTitle>
                <Components.inputsContainer>
                  <Components.Input placeholder="cep" onBlur={FetchCep}></Components.Input>
                  <Components.Input placeholder="Rua" value={street}></Components.Input>
                  <Components.Input placeholder="Número"></Components.Input>
                  <Components.Input placeholder="Bairro" value={neighborhood}></Components.Input>
                  <Components.Input placeholder="Cidade" value={city}></Components.Input>
                  <Components.Input placeholder="Estado" value={state}></Components.Input>
                </Components.inputsContainer>
                <Components.subTitle>
                    Horários de Funcionamento
                </Components.subTitle>
                <Components.divRightContainerTime>
                    <SelectDay
                    multiple
                    options={weekDays}
                    value={weekDays}
                    />
                    <Components.Paragraph style={{ padding: '0' }}>Início: </Components.Paragraph>
                    <Components.TimePicker type="time"/>
                    <Components.Paragraph style={{ padding: '0' }}>Fim: </Components.Paragraph>
                    <Components.TimePicker type="time"/>
                    <Components.Paragraph style={{ padding: '0' }}>Intervalo (opcional):</Components.Paragraph>
                    <Components.TimePicker type="time"/>
                    <Components.Paragraph style={{ padding: '0' }}></Components.Paragraph>
                    <Components.TimePicker type="time"/>
                    <Components.ButtonDefault onClick={() => setDisplayedCount(displayedCount+1)}>
                      +
                    </Components.ButtonDefault>
                </Components.divRightContainerTime>
                {displayedCount > 0 && PlusDaysHoursContent(value2, setValue2, optionsForValue2)}
                {displayedCount > 1 && PlusDaysHoursContent(value3, setValue3, optionsForValue3)}
                <Components.Button onClick={continueClick}>Continuar</Components.Button>
            </Components.divRight>
        </Components.Container>
)
}

export default Cadaster;