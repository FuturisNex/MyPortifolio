import styles from '../elements/styles/Card.module.css';
import ButtonB from './ButtonB';

function Card({ img, title, tech, description, repo, site }) {
  return (
    <div className={styles.Card}>
      <a href={site}>
        <img src={img} alt='ERRO' />
      </a>
      <div className={styles.CardInfo}>
        <h3> {title} </h3>
        <p>
          <strong> Tecnologia:</strong> {tech}
        </p>
        <p> {description} </p>
        <ButtonB text='Acesse o repositório' link={repo} />
      </div>
    </div>
  );
}

export default Card;
