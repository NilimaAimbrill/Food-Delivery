import React from 'react'
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
                    <Navbar.Brand href="#home" className={styles.navBrand}>WHAT2EAT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggleButton} />
                    <Navbar.Collapse id="responsive-navbar-nav" className={styles.navlinks}>
                        <Nav className={styles.gapBetween}>
                            <Nav.Link className={styles.active} href="#Home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Menu">Menu</Nav.Link>
                            <Nav.Link href="#Blog">Blog</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                        <div className={styles.searchShopIconMain}>
                            <ul className={styles.searchShopIcon}>
                                <li className={styles.searchShopIcon1}><SearchIcon /></li>
                                <li className={styles.searchShopIcon1}><ShoppingBagIcon /></li>
                            </ul>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header