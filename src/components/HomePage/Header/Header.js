import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tooltip from "@material-ui/core/Tooltip";
import LoginIcon from '@mui/icons-material/Login';
import SignUp from './Sign Up modal/SignUp'
import Badge from 'react-bootstrap/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { LoginContext } from '../../../App';
import SearchBar from '../../commonComponents/GlobalSearchBar/SearchBar';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    const [modalShow, setModalShow] = useState(false);
    const contextData = useContext(LoginContext);
    const { productCount } = useContext(LoginContext);
    const { toggleDrawer } = useContext(LoginContext);
    const { toggleSearch } = useContext(LoginContext);


    return (
        <>

            <div className={styles.headerMain}>
                <Navbar collapseOnSelect expand="md" variant="dark">
                    <Container className={styles.navContainer}>
                        <Navbar.Brand href="/" className={styles.navBrand}>WHAT2EAT</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggleButton} />
                        <Navbar.Collapse id="responsive-navbar-nav" className={styles.navlinks}>
                            {contextData.searchOpen ? (
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={contextData.query} onChange={contextData.handleInputChange}
                                    style={{ width: "100%",padding:"15px",border:"none",borderRadius:"10px"}}
                                />
                            ) : (

                                <Nav className={styles.gapBetween}>
                                    <Nav.Link as={Link} to="/" className={styles.active}>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/offer">Offers</Nav.Link>
                                    <Nav.Link as={Link} to="/franchise_enquiry">Franchise Enquiry</Nav.Link>
                                    <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                            )}
                        </Navbar.Collapse>
                        <div className={styles.searchShopIconMain}>
                            <ul className={styles.searchShopIcon}>
                                <li className={styles.searchShopIcon1}>
                                    <SearchIcon className={styles.searchIconToggle} onClick={toggleSearch} />
                                    {contextData.isLoggedIn === true ? (
                                        <Tooltip title='My cart'>
                                            <span className={styles.myCartIcon} onClick={toggleDrawer}><ShoppingBagIcon className='searchIcon' /><Badge className={styles.badgeStyle}>{productCount}</Badge></span>
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title='LogIn'>
                                            <LoginIcon className='searchIcon' onClick={() => setModalShow(true)} />
                                        </Tooltip>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </Container>
                </Navbar>
                <SignUp
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>


        </>
    )
}

export default Header