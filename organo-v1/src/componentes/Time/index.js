import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = { backgroundColor : props.corSecundaria }
    return (
       props.Colaboradores.length > 0 ? <section className='time' style={css} /* Renderiza a seção apenas se houver colaboradores */ > 
            <h3 style={{borderColor : props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.Colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} /> )} </div>
        </section>
        : ''
    )
}
export default Time; 