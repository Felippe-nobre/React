
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';


export default function Menu() {
   
    
    return /* Usamos Link do react-router-dom para navegação sem recarregar a página nisso usamos Link e o atributo to para definir o caminho oque é diferente do href que recarrega a página */ (
        <header>
            <nav className={styles.navegacao}>
               <MenuLink to="/">
                Inicio
               </MenuLink>
                <MenuLink to="/sobremim">
                Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}