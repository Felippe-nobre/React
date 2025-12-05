// Importa o arquivo de estilos (CSS) específico do componente Rodape
import './Rodape.css'

// Declaração do componente funcional Rodape
const Rodape = () => {
    return (
        // <footer> é a tag semântica usada para rodapés no HTML
        <footer className="footer"> 
            
            {/* Primeira seção: ícones das redes sociais */}
            <section>
                <ul>
                    {/* Cada <li> representa um item da lista */}
                    <li>
                        {/* 
                            Link para o Facebook — target="_blank" abre em nova aba.
                            Adicionamos rel="noopener noreferrer" para evitar warnings de segurança.
                        */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            {/* Imagem do ícone do Facebook */}
                            <img src="/imagens/fb.png" alt="Logo do Facebook" />
                        </a>
                    </li>

                    <li>
                        {/* Link para o Twitter */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/tw.png" alt="Logo do Twitter" />
                        </a>
                    </li>

                    <li>
                        {/* Link para o Instagram */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/ig.png" alt="Logo do Instagram" />
                        </a>
                    </li>
                </ul>
            </section>

            {/* Segunda seção: logo central */}
            <section>
                {/* Logo da empresa/projeto */}
                <img src="/imagens/logo.png" alt="Logo do Organo" />
            </section>

            {/* Terceira seção: texto do rodapé */}
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>

        </footer>
    )
}

// Exporta o componente para ser usado em outros arquivos
export default Rodape
