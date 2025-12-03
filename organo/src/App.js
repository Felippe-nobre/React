import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
    nome : 'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
    },
    {
    nome : 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
    },  
    {
    nome : 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
    },
    {
    nome : 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
    },
    {
    nome : 'UX e Design',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
    },
    {
    nome : 'Mobile',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
    },
    {
    nome : 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger; serve para debugar o código, quando o navegador abrir a pagina ele para nesse ponto para analisar o estado das variaveis
    setColaboradores([...colaboradores, colaborador]);
    
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time key={time.nome}  nome={time.nome}  corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} Colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)/*Aqui estamos mapeando os times para renderizar o componente Time para cada um deles, utillizamos as key para ajudar o react a identificar cada componente de forma unica */}    
      <Rodape />
    </div>

  );
}

export default App;
