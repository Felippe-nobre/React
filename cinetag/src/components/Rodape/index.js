import style from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={style.rodape}>
            <h2>Desenvolvido por <a href="https://github.com/Felippe-nobre" target="_blank" rel="noreferrer">Felippe Nobre</a></h2>
        </footer>
    )
}

export default Rodape;