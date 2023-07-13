import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./style.css"
import NavBar from './components/navbar/NavBar.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ProductDetail from './components/product-detail/ProductDetail'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <div>
    <BrowserRouter>
    <NavBar nombre="Urban Diamond Beats"/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/products/:productId' element={<ProductDetail/>} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
