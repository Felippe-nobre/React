import styles from "./Rodape.module.css";
import {ReactComponent as MarcaRegistrada} from "assets/marca_registrada.svg" /* Importando o SVG como componente React  dessa forma posso usar o SVG como se fosse um componente normal do React  podendo passar propriedades como className  onClick  entre outras  */;

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada /*Aqui vemos o SVG sendo usado como componente React */ />
            Desenvolvido por Felippe Nobre de Souza.
        </footer>
    )
}