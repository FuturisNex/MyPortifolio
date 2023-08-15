import React from 'react';
import ButtonB from '../elements/ButtonB';
import styles from './styles/Projects.module.css';
import Card from '../elements/Card';
import card1 from '../../images/projects/card1.jpeg';
import card2 from '../../images/projects/card2.jpeg';

function Projects() {
    return (
        <div className={styles.Projects} id='Projects'>
            <h1>Projetos</h1>
            <div className={styles.cardContainer}>
                <Card
                    img={card1}
                    title="Sistema De Dashboard"
                    tech="HTML, CSS, JS"
                    description="Desenvolvimento de um dashboard para o setor comercial."
                    repo="https://github.com/Gustavo-LionStar/Sao-Roque.git"
                    site="https://saoroque-compras.vercel.app/"
                />
                <Card
                    img={card2}
                    title="Portfólio"
                    tech="HTML, CSS, JS"
                    description="Este é o repositório deste projeto do Portfólio."
                    repo="https://github.com/Gustavo-LionStar/MyPortifolio.git"
                    site="https://my-portifolio-lionstar.vercel.app"
                />
            </div>
        </div>
    );
}

export default Projects;