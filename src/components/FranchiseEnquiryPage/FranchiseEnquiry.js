import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './FranchiseEnquiry.module.css'
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import ForumIcon from '@mui/icons-material/Forum';
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

function FranchiseEnquiry() {
    const schema = yup.object().shape({
        fname: yup.string().required("Your first Name is required!"),
        email: yup.string().email("Email contains @ and . signs!").required("Your Email is required!"),
        state: yup.string().required("Your state is required!"),
        city: yup.string().required("Your state is required!"),
        number: yup.number().positive().integer().required("Your Phone number is required!"),

    })
    const { register, handleSubmit,reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const onEnquiry = (data) => {
        console.log(data);
        localStorage.setItem("FranchiseEnquiryData", JSON.stringify(data));
        reset();
    }
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
                            <form onSubmit={handleSubmit(onEnquiry)}>
                                <div className={styles.halfFields}>
                                    <div className={styles.inputError}>
                                        <Form.Control className={styles.focusColor} style={{ borderColor: errors.fname?.message ? "red" : "#1AC073" }} type="text" placeholder="First Name"  {...register("fname")} />
                                        <p>{errors.fname?.message}</p>
                                    </div>
                                    <div className={styles.inputError}>
                                        <Form.Control className={styles.focusColor} style={{ borderColor: errors.lname?.message ? "red" : "#1AC073" }} type="text" placeholder="Last Name"  {...register("lname")} />
                                        <p>{errors.lname?.message}</p>
                                    </div>

                                </div>
                                <div className={styles.halfFields}>
                                    <div className={styles.inputError}>
                                        <Form.Control className={styles.focusColor} style={{ borderColor: errors.email?.message ? "red" : "#1AC073" }} type="email" placeholder="Your Email"  {...register("email")} />
                                        <p>{errors.email?.message}</p>
                                    </div>
                                    <div className={styles.inputError}>
                                        <Form.Control className={styles.focusColor} style={{ borderColor: errors.number?.message ? "red" : "#1AC073" }} type="tel" placeholder="Your Phone Number"  {...register("number")} />
                                        <p>{errors.number?.message}</p>
                                    </div>
                                </div>
                                <div className={styles.halfFields}>
                                    <div className={styles.inputError}>
                                        <Form.Control className={styles.focusColor} style={{ borderColor: errors.state?.message ? "red" : "#1AC073" }} type="text" placeholder="Your State"  {...register("state")} />
                                        <p>{errors.state?.message}</p>
                                    </div>
                                    <div className={styles.inputError}>
                                        <Form.Control className={styles.focusColor} style={{ borderColor: errors.city?.message ? "red" : "#1AC073" }} type="text" placeholder="Your City"  {...register("city")} />
                                        <p>{errors.city?.message}</p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <Form.Control className={styles.textArea} as="textarea" placeholder='Your message' rows={9}  {...register("message")} />
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