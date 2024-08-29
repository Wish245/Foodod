import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/card/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='app'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/placeOrder' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App