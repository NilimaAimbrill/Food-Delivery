import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import styles from './FranchiseEnquiry.module.css'
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import ForumIcon from '@mui/icons-material/Forum';


function FranchiseEnquiry() {
    return (
        <div className={styles.franchiseEnquiryMain}>
            <div className={styles.allFrachise} >
                <Container>
                    <Row className={styles.allFrachiseBoth}>
                        <Col md={12} lg={6} xl={6} className={styles.allFrachiseLeft}>
                            <h6><b>BE YOUR OWN BOSS</b></h6>
                            <h1 className={styles.allFrachiseHeadColor}>JOIN THE WHAT2EAT FAMILY</h1>
                            <p>Are you looking for a franchise opportunity that focuses on good,
                                quality food? If yes, then we are proud to offer pizza franchise opportunities
                                across the states to people who have the same goals as we do:
                                To serve great food made from fresh ingredients in a great atmosphere.
                            </p>
                            <p>
                                Investing in what2eat franchise gives you the independence of being a business owner along with
                                the support of our outstanding brand and experienced network. So be a part of the bigger network
                                and a winning brand that keeps customers coming back for delicious Pizzas just the way they want!
                            </p>
                            <p><b>For Franchise Query:</b></p>
                            <p><b>8678593028</b></p>
                            <p><b>8678593028</b></p>
                            <p><b>8678593028</b></p>
                            <p><b>8678593028(Gujarat)</b></p>
                            <p>Joining our pizza franchise family lets you benefit from the amazing brand we have created and gives
                                you the opportunity to gain the independence of being your own boss.
                            </p>
                        </Col>
                        <Col md={12} lg={6} xl={6} className={styles.allFrachiseRight}>
                            <div className={styles.allFrachiseRightHead}>
                                <h6><b>Share Your Details</b></h6>
                            </div>
                            <form>
                                <div className={styles.halfFields}>
                                    <Form.Control className={styles.focusColor} type="text" placeholder="First Name" />
                                    <Form.Control className={styles.focusColor} type="text" placeholder="Last Name" />
                                </div>
                                <div className={styles.halfFields}>
                                    <Form.Control className={styles.focusColor} type="email" placeholder="Your Email" />
                                    <Form.Control className={styles.focusColor} type="tel" placeholder="Your Phone Number" />
                                </div>
                                <div className={styles.halfFields}>
                                    <Form.Control className={styles.focusColor} type="text" placeholder="Your State" />
                                    <Form.Control className={styles.focusColor} type="text" placeholder="Your City" />
                                </div>
                                <div className="mb-3">
                                    <Form.Control className={styles.focusColor} as="textarea" placeholder='Your message' rows={9} />
                                </div>
                                <Button type='submit' className={styles.franchiseEnquirySubmit} endIcon={<ForumIcon />}>Send Message</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default FranchiseEnquiry