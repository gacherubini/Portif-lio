import {AiFillPhone, AiOutlineMail, AiFillEnvironment,AiOutlineSolution, AiOutlineGlobal} from 'react-icons/ai'
import '../styles/components/information.sass'

const Information = () => {
  return (
    <section id='information'>
        <div className='info-card'>
        <AiFillPhone id='phone-icon'/>
        <div>
            <h3>Telefone</h3>
            <p>(51) 980336365</p>
        </div>
        </div>
        <div className='info-card'>
        <AiOutlineMail id='email-icon'/>
        <div>
            <h3>E-mail</h3>
            <p>bielche2009@hotmail.com</p>
        </div>
        </div>
        <div className='info-card'>
        <AiFillEnvironment id='pin-icon'/>
        <div>
            <h3>Localização</h3>
            <p>Porto Alegre, RS</p>
        </div>
        </div>
        <div className='info-card'>
        <AiOutlineSolution id='pin-icon'/>
        <div>
            <h3>Faculdade</h3>
            <p>Ciências da Computação, PUCRS</p>
            <p>marco/2021 - presente</p>
        </div>
        </div>
        <div className='info-card'>
        <AiOutlineGlobal id='pin-icon'/>
        <div>
            <h3>Idiomas</h3>
            <p>Português (nativo), Inglês (avançado)</p>
        </div>
        </div>
    </section>
  )
}

export default Information