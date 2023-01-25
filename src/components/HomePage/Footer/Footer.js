import React from 'react'
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
                <Navbar collapseOnSelect expand="lg"  variant="dark">
                    <Container className={styles.navContainer}>
                        <Navbar.Brand href="#home" className={styles.navBrand}>WHAT2EAT</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className={styles.toggleButton}  />
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
                                <li className={styles.searchShopIcon1}><FacebookIcon /></li>
                                <li className={styles.searchShopIcon1}><InstagramIcon /></li>
                            </ul>
                        </div>
                    </Container>
                </Navbar>
                <hr className={styles.horizontalLine}/>
                <div className={styles.copyright}>
                    <p>Copyright @2021 What2Eat</p>
                </div>

            </Container>
        </div>
    )
}

export default Footer