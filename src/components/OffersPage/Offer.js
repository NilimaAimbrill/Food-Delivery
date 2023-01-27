import React from 'react'
import styles from './Offer.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import buyOneGetOne from '../images/image-586394-1671524332.gif'
import OfferCard from '../commonComponents/OfferCard/OfferCard'


function Offer() {
  return (
    <div className={styles.offerMain}>
      <Container className={styles.allOffers}>
        <div className={styles.allOfferHead}>
          <h2>Deals and Offers</h2>
          <img src={buyOneGetOne} alt='gif' />
        </div>
        <Row>
          <Col lg={6} xl={6} xxl={6} md={12} className={styles.cardMarginBottom}>
            <OfferCard image={img1} />
          </Col>
          <Col lg={6} xl={6} xxl={6} md={12} className={styles.cardMarginBottom}>
            <OfferCard image={img2} />
          </Col>
          <Col lg={6} xl={6} xxl={6} md={12} className={styles.cardMarginBottom}>
            <OfferCard image={img3} />
          </Col>
          <Col lg={6} xl={6} xxl={6} md={12} className={styles.cardMarginBottom}>
            <OfferCard image={img4} />
          </Col>
          <Col lg={6} xl={6} xxl={6} md={12} className={styles.cardMarginBottom}>
            <OfferCard image={img5} />
          </Col>
          <Col lg={6} xl={6} xxl={6} md={12} className={styles.cardMarginBottom}>
            <OfferCard image={img6} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Offer