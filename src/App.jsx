import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AboutPage from './views/AboutPage/AboutPage';
import HomePage from './views/HomePage/HomePage';
import CategoryPage from './views/CategoryPage/CategoryPage';

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
          <Route path='/category' element={<CategoryPage/>} />
          <Route path='/category/:categoryId' element={<CategoryPage/>} />
        </Routes>
      </div>
    </Router>    
  )
}

export default App
