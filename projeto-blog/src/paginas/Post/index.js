import "./Post.css";
import styles from "./Post.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";


export default function Post(){
    const parametros = useParams() /* useParams é um hook do react-router-dom que permite acessar os parâmetros da URL da rota atual. Neste caso, ele está sendo usado para obter o valor do parâmetro id definido na rota /posts/:id. Isso é útil para identificar qual post específico deve ser exibido com base no ID fornecido na URL. */;
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })
    if(!post){
        return <NaoEncontrada />
    }
     const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados} /* Lista de posts recomendados */>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>

                    </PostModelo>
                } />
            </Route>
        </Routes>
    )
}