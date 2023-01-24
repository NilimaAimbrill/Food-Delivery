import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className='footerMain'>
            <div className='container'>
                <nav className="navbar footer navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid footerFluid">
                        <a className="navbar-brand " href="/">WHAT2EAT</a>
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
                            <ul className='fbig'>
                                <li className='searchShopIcon1'><FacebookIcon /></li>
                                <li className='searchShopIcon1'><InstagramIcon /></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr style={{ color: "white", border: "1px solid white" }} />
                <div className='copyright'>
                    <p>Copyright @2021 What2Eat</p>
                </div>

            </div>
        </div>
    )
}

export default Footer