import styles from './styles/Presentation.module.css'
import { useEffect, useState } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Gustavo', 'desenvolvedor'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 200;
    const [delta, setDelta] = useState(150);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    return (
        <div className={styles.Presentation} id="Presentation">
            <h4>Bem-vindo ao meu Portifólio</h4>
            <h1>Olá, eu sou {text} </h1>
            <p>
                Sou um desenvolvedor apaixonado por transformar ideias em realidade digital. <br />
                Na minha jornada até aqui aprendi a dominar uma variedade de ferramentas e <br />
                linguagens, incluindo JavaScript, Java, CSS, React e HTML. Com uma abordagem <br />
                centrada no usuário, estou sempre em busca de soluções criativas e funcionais <br />
                que atendam às necessidades específicas de cada projeto.<br />
            </p>
        </div>
    )
}

export default Presentation