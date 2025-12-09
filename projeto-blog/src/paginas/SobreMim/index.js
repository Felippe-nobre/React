import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Felippe!</h3>
      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Foto do Felippe"
      />
      <p className={styles.paragrafo}>
  Sou um profissional apaixonado por tecnologia, com sólida base em HTML5, CSS3,
  JavaScript e React, e em constante evolução para me tornar um Desenvolvedor
  Full Stack completo.
</p>

<p className={styles.paragrafo}>
  Atualmente curso Análise e Desenvolvimento de Sistemas, ampliando meus
  conhecimentos em back-end e arquitetura de software.
</p>

<p className={styles.paragrafo}>
  Tenho experiência na criação de interfaces modernas, intuitivas e responsivas,
  sempre com foco em performance, usabilidade e boas práticas de desenvolvimento.
</p>

<p className={styles.paragrafo}>
  Busco unir a visão do front-end à lógica do back-end para entregar soluções
  completas, escaláveis e de alto impacto.
</p>

<p className={styles.paragrafo}>
  Sou reconhecido pela dedicação, aprendizado rápido e atenção aos detalhes,
  além de manter uma postura colaborativa e orientada a resultados.
</p>

<p className={styles.paragrafo}>
  Acredito que tecnologia é mais do que código — é resolver problemas e gerar
  valor real para pessoas e empresas.
</p>

    </PostModelo>
  );
}
