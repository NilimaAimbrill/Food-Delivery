import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className='footerMain'>
            <div className='container'>
            <Navbar collapseOnSelect  expand="lg">
                <Container className='navContainer'>
                    <Navbar.Brand href="#home" className='navBrand'>WHAT2EAT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='navlinks'>
                        <Nav className='gapBetween'>
                            <Nav.Link className='active' href="#Home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Menu">Menu</Nav.Link>
                            <Nav.Link href="#Blog">Blog</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                        <div className='d-flex searchShopIconMain'>
                            <ul className='searchShopIcon'>
                                <li className='searchShopIcon1'><FacebookIcon /></li>
                                <li className='searchShopIcon1'><InstagramIcon /></li>
                            </ul>
                        </div>
                </Container>
            </Navbar>
                <hr style={{ color: "white", border: "1px solid white" }} />
                <div className='copyright'>
                    <p>Copyright @2021 What2Eat</p>
                </div>

            </div>
        </div>
    )
}

export default Footer