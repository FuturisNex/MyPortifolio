import './App.css';
import Presentation from './componentes/sections/Presentation';
import Projects from './componentes/sections/Projects';
import Skills from './componentes/sections/Skills';
import Footer from './componentes/sections/Footer';
import ButtonB from './componentes/elements/ButtonB';


function App() {
  return (
    <div className="App">
      <Presentation></Presentation>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
