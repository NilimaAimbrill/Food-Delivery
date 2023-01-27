import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './OfferCaard.module.css'

function OfferCard(props) {
    return (
        <div>
            <Card className={styles.mainOfferCard}>
             <div className={styles.offerCardMain}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body className={styles.offerCardBody}>
                    <h6><b>FLAT</b></h6>
                    <Card.Title className={styles.offerCardTitle}>₹ 50 OFF</Card.Title>
                    <h6><b>ON ORDER ABOVE 299</b></h6>
                    <Button className={styles.offerAvailBtn}>Use code W2E301</Button>
                </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default OfferCard