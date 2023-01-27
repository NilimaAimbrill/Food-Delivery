import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import { ContactUsPage } from './components/ContactUsPage/ContactUsPage';
import Menu from './components/MenuPage/Menu'
import Header from './components/HomePage/Header/Header';
import Footer from './components/HomePage/Footer/Footer';
import FranchiseEnquiry from './components/FranchiseEnquiryPage/FranchiseEnquiry';
// import {QueryClient,QueryClientProvider} from "@tanstack/react-query"


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/franchiseEnquiry' element={<FranchiseEnquiry />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
