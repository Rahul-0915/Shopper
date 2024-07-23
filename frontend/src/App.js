import './App.css';
import Navbar from "./Components/Navbar/Navbar";
// it used for routes topic..
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      {/* Browserouter topic pending....for learning */}
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Shop/>}/>
          <Route path='/Mens' element={<ShopCategory Category="Men" />}/>
          <Route path='/Womens' element={<ShopCategory Category="Women" />}/>
          <Route path='/Kids' element={<ShopCategory Category="Kids" />}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
        <Route/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div >
  );
}

export default App;
