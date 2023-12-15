import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';

import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path = "/" element = { <Home />} />
          <Route path = "/create" element = { <Create />} />
          <Route path = "/recipe/:id" element = { <Recipe />} />
          <Route path = "/search" element = { <Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
