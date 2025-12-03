import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, corDeFundo}) => { /* Props serve para receber propriedades dinamicas que são passadas para o componente */
    return (<div className="colaborador"> 
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>

    )
}

export default Colaborador