import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import { ContactUsPage } from './components/ContactUsPage/ContactUsPage';
// import {QueryClient,QueryClientProvider} from "@tanstack/react-query"


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
