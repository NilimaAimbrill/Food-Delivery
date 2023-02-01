import React from 'react'
import styles from './Offer.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import buyOneGetOne from '../images/image-586394-1671524332.gif'
import OfferCard from '../commonComponents/OfferCard/OfferCard'
import offerDetail from './OfferCardDeatails'



function Offer() {
  return (
    <div className={styles.offerMain}>
      <Container className={styles.allOffers}>
        <div className={styles.allOfferHead}>
          <h2>Deals and Offers</h2>
          <img src={buyOneGetOne} alt='gif' />
        </div>
        <Row>
          {offerDetail.map(details => (
            <Col lg={6} xl={6} xxl={6} md={12} className={styles.cardMarginBottom}>
              <OfferCard key={details.id} {...details} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Offer