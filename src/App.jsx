import MainContent from './components/MainContent'
import SideBar from './components/SideBar'
import './styles/components/app.sass'
import {PiHandWavingFill} from 'react-icons/pi'


function App() {

  return (
    <div id="portifolio">
      <header>
      <h1>Oi, Eu sou o Gabriel</h1> 
      <PiHandWavingFill className='maozinha' size={100}/>
      </header>
      <SideBar/>
      <MainContent/>
    </div>
  )
}

export default App
