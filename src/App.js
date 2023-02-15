import './App.css';
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import { ContactUsPage } from './components/ContactUsPage/ContactUsPage';
import Menu from './components/MenuPage/Menu'
import Header from './components/HomePage/Header/Header';
import Footer from './components/HomePage/Footer/Footer';
import FranchiseEnquiry from './components/FranchiseEnquiryPage/FranchiseEnquiry';
import Offer from './components/OffersPage/Offer';
import './variable.css';
import FoodDetails from './components/commonComponents/Food Details/FoodDetails';
import CartPage from './components/commonComponents/CartPage/CartPage';

// import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  
  const addToCart = (product) => {
    const updatedCart = [...cart,{ ...product, id: product.slug, quantity: 1  }];
    setCart(updatedCart);
    // console.log("cart", updatedCart)
    setTotalPrice(totalPrice + product.price);
    setProducts(
      products.map((p) => (p.id === product.id ? { ...p, isInCart: true } : p))
    );
    setProductCount(productCount + 1);
    console.log(productCount);
  };
  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    const removedItem = cart.find((item) => item.id === productId);
    setProductCount(productCount - 1);
    setTotalPrice(totalPrice - removedItem.price * removedItem.quantity);
    setCart(updatedCart);
    setProducts(
      products.map((p) => (p.id === productId ? { ...p, isInCart: false } : p))
    );
  };
  

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        setTotalPrice(totalPrice + item.price);
        return updatedItem;
      }
      return item;
    });
    setCart(updatedCart);
  };


  const decrementQuantity = (id) => {
    const updatedCart = cart.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCart(updatedCart);
  };

  return (
    <div className='App'>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn,decrementQuantity, productCount,removeFromCart,incrementQuantity, setProductCount, isOpen, setOpen, toggleDrawer, addToCart,totalPrice,setTotalPrice, cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactUsPage />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/franchise_enquiry' element={<FranchiseEnquiry />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/food_details/:productId' element={<FoodDetails />} />
          </Routes>
          {isOpen && (<CartPage />)}
          <Footer />
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
