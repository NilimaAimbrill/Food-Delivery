import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Header() {
    return (
        <div className='headerMain'>
            {/* <div className='container'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <a className="navbar-brand " href="/">WHAT2EAT</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><MenuIcon /></span>
                        </button>
                        <div className="collapse navbar-collapse navlinks" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className='d-flex searchShopIconMain'>
                            <ul className='searchShopIcon'>
                                <li className='searchShopIcon1'><SearchIcon /></li>
                                <li className='searchShopIcon1'><ShoppingBagIcon /></li>
                            </ul>
                        </div>
                </nav>
            </div> */}
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