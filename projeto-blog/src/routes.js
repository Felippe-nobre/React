import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes /* O react-router-dom usa Routes para definir as rotas da aplicação  aqui vamos definir as rotas  com Route  e dentro dele coloco o caminho e o componente que será renderizado */
      >
        <Route path="/" element={<PaginaPadrao />}>
          <Route
            index
            element={
              <Inicio />
            } /*aqui usamos o index para a rota principal, poderiamos uar o path tambeém sem problema, mas assim fica mais claro oque estamoos refernciando*/
          />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
