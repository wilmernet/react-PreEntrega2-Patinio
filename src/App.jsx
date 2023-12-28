import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AboutPage from './views/AboutPage/AboutPage';
import HomePage from './views/HomePage/HomePage';
import CategoryPage from './views/CategoryPage/CategoryPage';
import DetailPage from './views/DetailPage/DetailPage';

const App=()=> {

  return (
    <Router>
      <div className='App'>
        <Header/>
        <NavBar/>        
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/category' element={<CategoryPage/>} />
          <Route path='/category/:categoryId' element={<CategoryPage/>} />
          <Route path='/detail/:id' element={<DetailPage/>} />
        </Routes>
      </div>
    </Router>    
  )
}

export default App
