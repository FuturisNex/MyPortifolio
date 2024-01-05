import styles from './styles/Presentation.module.css';
import { useEffect, useState } from 'react';

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Gustavo', 'desenvolvedor'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 200;
    const [delta, setDelta] = useState(150);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText;

        if (isDeleting) {
            updatedText = text.substring(0, text.length - 1);
        } else {
            updatedText = fullText.substring(0, text.length + 1);
        }

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(150); // Manter a mesma velocidade
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(150); // Manter a mesma velocidade
            setLoop(loop + 1);
        }
    };

    const codeStyle = {
        color: '#00FF00',
        fontFamily: 'Arial Black, sans-serif', // Usando a fonte "Arial Black" como fonte personalizada
        fontWeight: 'bold', // Definindo a espessura da fonte como "bold"
    };

    return (
        <div className={styles.Presentation} id="Presentation">
            <h1>
                Olá, eu sou{' '}
                <span style={codeStyle}>
                    {text}
                    <span
                        style={{
                            opacity: isDeleting ? 1 : 0,
                            borderRight: '2px solid #00FF00',
                            animation: 'typing 1s steps(10, end) infinite',
                        }}
                    ></span>
                </span>
            </h1>
            <p>
                Sou um desenvolvedor apaixonado por transformar ideias em realidade digital. <br />
                Na minha jornada até aqui aprendi a dominar uma variedade de ferramentas e <br />
                linguagens, incluindo JavaScript, Java, CSS, React e HTML. Com uma abordagem <br />
                centrada no usuário, estou sempre em busca de soluções criativas e funcionais <br />
                que atendam às necessidades específicas de cada projeto.<br />
            </p>
        </div>
    );
}

export default Presentation;
