import './App.css';
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
import ProductGallery from './components/commonComponents/ProductGallery/ProductGallery';
// import { LoginProvider } from "./Contex/LogIn/LoginContext";
// import {QueryClient,QueryClientProvider} from "@tanstack/react-query"


function App() {

  return (
    <div className='App'>
      {/* <LoginProvider> */}
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
      {/* </LoginProvider> */}
    </div>
  );
}

export default App;
