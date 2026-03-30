import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './Player.module.css'
import { useParams } from 'react-router-dom';
import videos from "json/db.json";
import NaoEncontrada from 'pages/NaoEncontrada';

function Player() {
    const parametros = useParams();

    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    });

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />

            <main>
                <Titulo>
                    <h1>Player</h1>
                </Titulo>

                <section className={styles.playerWrapper}>
                    <div className={styles.videoContainer}>
                        <iframe
                            src={video.link}
                            title={video.titulo}
                            allowFullScreen
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Player;