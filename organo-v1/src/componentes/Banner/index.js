import "./Banner.css";
function Banner() {
  return (
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="Banner principal da página do Organo"
      />
    </header>
    //<Fragment></Fragment> ou <></>  utilizado para agrupar elementos sem adicionar nós extras ao DOM
  );
}

export default Banner;
