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
import SignInSignupWithLocalStorage from '../src/components/HomePage/Header/Sign Up modal/SignUp'
// import {QueryClient,QueryClientProvider} from "@tanstack/react-query"


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <SignInSignupWithLocalStorage />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/franchiseEnquiry' element={<FranchiseEnquiry />} />
          <Route path='/offer' element={<Offer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
