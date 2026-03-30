import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";
import styles from "./PaginaBase.module.css";

function PaginaBase() {
    return (
        <div className={styles.app}>
            <Cabecalho />

            <main className={styles.main}>
                <FavoritosProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProvider>
            </main>

            <Rodape />
        </div>
    )
}

export default PaginaBase;