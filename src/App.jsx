import './App.css'
import Illustration from '/images/illustration-hero.svg';
import Description from './components/description/description';
import Plan from './components/plan/plan';
import Buttons from './components/buttons/buttons';

function App() {
  return (
    <main>
      <img src={Illustration} alt="Illustration hero" id='hero' />
      <div className="main-div">
        <Description />
        <Plan />
        <Buttons />
      </div>
    </main>
  )
}

export default App
