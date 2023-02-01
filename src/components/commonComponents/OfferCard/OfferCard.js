import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './OfferCaard.module.css'

function OfferCard(props) {
    const {image,off,above,code}=props
    return (
        <div>
            <Card className={styles.mainOfferCard}>
             <div className={styles.offerCardMain}>
                <Card.Img variant="top" src={image} />
                <Card.Body className={styles.offerCardBody}>
                    <h6><b>FLAT</b></h6>
                    <Card.Title className={styles.offerCardTitle}>₹ {off} OFF</Card.Title>
                    <h6><b>ON ORDER ABOVE {above}</b></h6>
                    <Button className={styles.offerAvailBtn}>Use code {code}</Button>
                </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default OfferCard