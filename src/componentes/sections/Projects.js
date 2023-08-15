import React from 'react';
import styles from './styles/Projects.module.css';
import Card from '../elements/Card';
import card1 from '../../images/projects/card1.jpeg';
import card2 from '../../images/projects/card2.jpeg';
import card3 from '../../images/projects/card3.jpeg';

function Projects() {
    return (
        <div className={styles.Projects} id='Projects'>
            <h1>Projetos</h1>
            <div className={styles.cardContainer}>
                <Card
                    img={card1}
                    title="Sistema De Dashboard"
                    tech="HTML, CSS, JS, REACT"
                    description="Desenvolvimento de um dashboard para o setor comercial."
                    repo="https://github.com/Gustavo-LionStar/Sao-Roque.git"
                />
                <Card
                    img={card2}
                    title="Portfólio"
                    tech="HTML, CSS, JS, REACT"
                    description="Este é o repositório deste projeto do Portfólio."
                    repo="https://github.com/Gustavo-LionStar/MyPortifolio.git"
                />
                <Card
                    img={card3}
                    title="Formulário"
                    tech="HTML, CSS, JS, REACT"
                    description="Este é o repositório de um formulário integrado com o google AppScript."
                    repo="https://github.com/Gustavo-LionStar/comprador.git"
                />
            </div>
        </div>
    );
}

export default Projects;