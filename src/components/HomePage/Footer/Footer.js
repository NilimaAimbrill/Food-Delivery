import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className={styles.footerMain}>
            <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container className={styles.navContainer}>
                        <Navbar.Brand href="#home" className={styles.navBrand}>WHAT2EAT</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggleButton} />
                        <Navbar.Collapse id="responsive-navbar-nav" className={styles.navlinks}>
                            <Nav className={styles.gapBetween}>
                                <Nav.Link as={Link} to="/" className={styles.active}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/offer">Offers</Nav.Link>
                                <Nav.Link as={Link} to="/franchiseEnquiry">Franchise Enquiry</Nav.Link>
                                <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <div className={styles.searchShopIconMain}>
                            <ul className={styles.searchShopIcon}>
                                <li className={styles.searchShopIcon1}><FacebookIcon /></li>
                                <li className={styles.searchShopIcon1}><InstagramIcon /></li>
                            </ul>
                        </div>
                    </Container>
                </Navbar>
                <hr className={styles.horizontalLine} />
                <div className={styles.copyright}>
                    <p>Copyright @2021 What2Eat</p>
                </div>

            </Container>
        </div>
    )
}

export default Footer