import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            <Outlet
            /* O Outlet serve para renderizar os componentes filhos  ou seja  os componentes que estão dentro dessa rota  no caso  Inicio e SobreMim */ />
        </main>
    )
}