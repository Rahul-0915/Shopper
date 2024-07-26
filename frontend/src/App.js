import './App.css';
import Navbar from "./Components/Navbar/Navbar";
// it used for routes topic..
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
// banners
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';



function App() {
  return (
    <div>
      {/* Browserouter topic pending....for learning */}
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Shop/>}/>
          <Route path='/Mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/Womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/Kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
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
