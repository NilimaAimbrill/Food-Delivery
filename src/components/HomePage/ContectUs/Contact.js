import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import delivery_boy from '../../images/delivery_boy.png'
import styles from './Contact.module.css'
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className={styles.contactMain}>
            <Container>
                <div className={styles.allContact}>
                    <Row className={styles.marginBottom}>
                        <Col lg={5} xl={6} xxl={5} md={12} className={styles.contactContent}>
                            <h3>Do you have a question<br />
                                or want to become a seller?</h3>
                            <p>Fill this form and our manager will contact you next 48 hours.</p>
                            <form>
                                <div className={styles.nameEmail}>
                                    <Form.Control className={styles.focusColor} type="email" placeholder="Your Name" />
                                    <Form.Control className={styles.focusColor} type="email" placeholder="Your email" />
                                </div>
                                <div className="mb-3">
                                    <Form.Control className={styles.focusColor} as="textarea" placeholder='Your message' rows={9} />
                                </div>
                                <div className={styles.submitBtn}>
                                    <Button type='submit'>Submit</Button>
                                </div>
                            </form>
                        </Col>
                        <Col lg={7} xl={6} xxl={7} md={12}>
                            <img className={styles.deliveryBoyimg} src={delivery_boy} alt='delivery_boy' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Contact