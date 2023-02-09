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


// import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productCount, setProductCount] = useState(0);
  // const [cartProducts, setCardProducts] = useState([]);

  const addProduct = () => {
    setProductCount(productCount + 1);
  };


  return (
    <div className='App'>
      <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn,productCount,setProductCount,addProduct}}>
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
          <Footer />
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
