import React from 'react'
import styles from './ContactCard.module.css'
import Card from 'react-bootstrap/Card';

function ContactCard(props) {
    return (
        <div>
            <Card className={styles.card}>
                <div>{props.icon}</div>
                <Card.Body className={styles.myCardBody}>
                    <Card.Text className={styles.cardBodyHead}>
                        <h5 className={styles.cardHeading}>{props.heading}</h5>
                        <p className={styles.cardpara}>{props.para}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard