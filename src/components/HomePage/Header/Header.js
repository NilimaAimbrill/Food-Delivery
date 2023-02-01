import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tooltip from "@material-ui/core/Tooltip";
import LoginIcon from '@mui/icons-material/Login';
import SignUp from './Sign Up modal/SignUp'

function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className={styles.headerMain}>
            <Navbar collapseOnSelect expand="md" variant="dark">
                <Container className={styles.navContainer}>
                    <Navbar.Brand href="/" className={styles.navBrand}>WHAT2EAT</Navbar.Brand>
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
                            <li className={styles.searchShopIcon1}>
                                <Tooltip title='LogIn'>
                                    <LoginIcon className='searchIcon' onClick={() => setModalShow(true)} />
                                </Tooltip>
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
    )
}

export default Header