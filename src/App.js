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
import CheckOutPage from './components/commonComponents/CheckOutPage/CheckOutPage';
import SearchItem from './components/commonComponents/GlobalSearchBar/SearchItems';

export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, id: product.slug, quantity: 1 }];
    setCart(updatedCart);
    setTotalPrice(totalPrice + product.price);
    setProducts(
      products.map((p) => (p.id === product.id ? { ...p, isInCart: true, prodQuantity: 1 } : p))
    );
    setProductCount(productCount + 1);
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

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query !== "") {
      const response = await fetch(`https://mock.redq.io/api/products?search=type.slug:grocery;name:${query};status:publish`);
      const data = await response.json();
      setSearchResults(data.data);
      const suggestedProducts = searchResults.filter(product => product.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
      setSuggestedProducts(suggestedProducts);
    } else {
      setSearchResults([]);
    }

  };

  const handleSearch = async () => {
    const response = await fetch(`https://mock.redq.io/api/products?search=type.slug:grocery;name:${query};status:publish`);
    const data = await response.json();
    console.log("data", data)
    setSearchResults(data.data);
    console.log("product", query);
  };

  return (
    <div className='App'>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, decrementQuantity, productCount, removeFromCart, incrementQuantity, setProductCount, isOpen, setOpen, toggleDrawer, addToCart, totalPrice, setTotalPrice, cart, setCart, products, handleInputChange, handleSearch, searchResults, setSearchResults, query, setQuery, toggleSearch, searchOpen }}>
        <BrowserRouter>
          <div className={isOpen ? "temp blur" : "temp"}>
            <Header />
            <div className={isOpen ? "temp blur" : "temp"} onClick={() => { setOpen(false) }}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactUsPage />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/franchise_enquiry' element={<FranchiseEnquiry />} />
                <Route path='/offer' element={<Offer />} />
                <Route path='/food_details/:productId' element={<FoodDetails />} />
                <Route path='/checkoutpage' element={<CheckOutPage />} />
                <Route path='/searchItems' element={<SearchItem />} />
              </Routes>
              <Footer />
            </div>
          </div>
          {isOpen && (<CartPage />)}
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
