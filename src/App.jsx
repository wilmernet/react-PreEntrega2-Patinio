import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AboutPage from './views/AboutPage/AboutPage';
import HomePage from './views/HomePage/HomePage';

const App=()=> {

  return (
    <Router>
      <div className='App'>
        <Header/>
        <NavBar/>
        <h1>Prueba</h1>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/about2' element={<AboutPage/>} />
        </Routes>
      </div>
    </Router>    
  )
}

export default App
