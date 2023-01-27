import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


function Header() {
    return (
        <div className={styles.headerMain}>
            <Navbar collapseOnSelect  expand="md" variant="dark">
                <Container className={styles.navContainer}>
                    <Navbar.Brand href="/" className={styles.navBrand}>WHAT2EAT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggleButton} />
                    <Navbar.Collapse id="responsive-navbar-nav" className={styles.navlinks}>
                        <Nav className={styles.gapBetween}>
                            <Nav.Link  as={Link} to="/" className={styles.active}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/offer">Offers</Nav.Link>
                            <Nav.Link as={Link} to="/franchiseEnquiry">Franchise Enquiry</Nav.Link>
                            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                        <div className={styles.searchShopIconMain}>
                            <ul className={styles.searchShopIcon}>
                                <li className={styles.searchShopIcon1}><SearchIcon className='searchIcon'/></li>
                                <li className={styles.searchShopIcon1}><ShoppingBagIcon /></li>
                            </ul>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header