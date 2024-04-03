// import { Route, Link} from 'react-router-dom'
import Add from './components/Add'
import Update from './components/Updates'
import Archive from './components/Archives'
import Searchings from './components/Searchings'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './styles/App.css'

export default function App() {
  return (
    <div className="App">
      <div>
          <nav id='navOfApp'>
            <ul>
              <li className='navList'>
                <h2>
                  <a href='/registrar'>Registrar</a>
                </h2>
                <hr className='underLineOf'/>
              </li>
              <li className='navList'>
                <h2>
                  <a href='/editar'>Editar</a>
                </h2>
                <hr className='underLineOf'/>
              </li>
              <li className='navList'>
                <h2>
                  <a href='/consultar'>Consultar</a>
                </h2>
                <hr className='underLineOf'/>
              </li>
              <li className='navList'>
                <h2>
                  <a href='/archivar'>Archivar</a>
                </h2>
                <hr className='underLineOf'/>
              </li>
            </ul>
          </nav>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/registrar' element={<Add/>}/>
        <Route path='editar' element={<Update/>}/>
        <Route path='consultar' element={<Searchings/>}/>
        <Route path='archivar' element={<Archive/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

