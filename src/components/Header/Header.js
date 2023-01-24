import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Header() {
    return (
        <div className='headerMain'>
            <Navbar collapseOnSelect  expand="md">
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
                                <li className='searchShopIcon1'><SearchIcon /></li>
                                <li className='searchShopIcon1'><ShoppingBagIcon /></li>
                            </ul>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header