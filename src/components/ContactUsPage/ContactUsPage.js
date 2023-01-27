import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ContactCard from '../commonComponents/ContactCard/ContactCard'
import styles from './ContactUsPage.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Header from '../HomePage/Header/Header'
import Form from 'react-bootstrap/Form';
import Footer from '../HomePage/Footer/Footer';

export const ContactUsPage = () => {
    return (
        <>
            <div className={styles.mainContactPage}>
                <Container>
                    <div className={styles.headParaContact}>
                        <h1>We would love to hear from you</h1>
                        <p> Drop us a line to say hello</p>
                    </div>
                    <div className={styles.contactInfoCard}>
                        <Row>
                            <Col lg={4} xl={4} xxl={4} md={4} >
                                <ContactCard icon={<LocationOnIcon className='ContactIcon' />} heading="Address" para="437,Maruti plaza ,Nikol" />
                            </Col>
                            <Col lg={4} xl={4} xxl={4} md={4} >
                                <ContactCard icon={<EmailIcon className='ContactIcon' />} heading="Email" para="Aimbrill@gmail.com" />
                            </Col>
                            <Col lg={4} xl={4} xxl={4} md={4} >
                                <ContactCard icon={<PhoneAndroidIcon className='ContactIcon' />} heading="Phone" para="9696969696" />
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.mainContactForm}>
                        <div className={styles.formHeading}>
                            <b>Contact Us</b>
                        </div>
                        <div className={styles.contactFormInputs}>
                            <Form>
                                <Form.Group className={styles.inputFlex} controlId="exampleForm.ControlInput1">
                                    <Form.Control className={styles.formInput} type="text" placeholder="Name" />
                                    <Form.Control className={styles.formInput} type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className={styles.inputFlex} controlId="exampleForm.ControlInput1">
                                    <Form.Control className={styles.formInput} type="tel" placeholder="Contact Number" />
                                    <Form.Control className={styles.formInput} type="email" placeholder="Email id" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className={styles.focusTextArea} as="textarea" rows={7} placeholder="Write your messages"/>
                                </Form.Group>
                                <Button className={styles.contactSubmitBtn} type='submit'>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
