import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
     const localiazacao = useLocation(); // Hook que retorna o objeto de localização atual podemos usar isso para saber qual é a rota ativa
    return (
        <Link className={`
            ${styles.link}
            ${localiazacao.pathname === to ? styles.linkDestacado : ''}
        `} to={to}>
            {children}
        </Link>
    )
}