import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactCard from '../commonComponents/ContactCard/ContactCard'
import styles from './ContactUsPage.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Header from '../HomePage/Header/Header'
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../HomePage/Footer/Footer';
import SendIcon from '@mui/icons-material/Send';
import { useController, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"



export const ContactUsPage = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Your Name is required!"),
        email: yup.string().email("Email contains @ and . signs!").required("Your Email is required!"),
        number: yup.number().positive().integer().required("Your Phone number is required!"),
        lastname: yup.string().required("Your Last Name is required!"),
        message: yup.string().required("Your Message is required!"),

    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
       const onContactUs = (data) => {
        console.log(data);
        // setFormData(data);
        localStorage.setItem('ContactData', JSON.stringify(data));
        reset();

    }

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
                                <ContactCard icon={<PhoneAndroidIcon className='ContactIcon' />} heading="Phone" para="+91 9696969696" />
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.mainContactForm}>
                        <div className={styles.formHeading}>
                            <b>Contact Us</b>
                        </div>
                        <div className={styles.contactFormInputs}>
                            <form onSubmit={handleSubmit(onContactUs)}>
                                <Form.Group className={styles.inputFlex} controlId="exampleForm.ControlInput1">
                                    <div className={styles.allErrorInput}>
                                        <Form.Control className={styles.formInput} style={{ borderColor: errors.name?.message ? "red" : "#1AC073" }} type="text" placeholder="Name" {...register("name")}/>
                                        <p>{errors.name?.message}</p>
                                    </div>
                                    <div className={styles.allErrorInput}>
                                        <Form.Control className={styles.formInput} style={{ borderColor: errors.lastname?.message ? "red" : "#1AC073" }} type="text" placeholder="Last Name" {...register("lastname")}/>
                                        <p>{errors.lastname?.message}</p>
                                    </div>
                                </Form.Group>
                                <Form.Group className={styles.inputFlex} controlId="exampleForm.ControlInput1">
                                    <div className={styles.allErrorInput}>
                                        <Form.Control className={styles.formInput} style={{ borderColor: errors.number?.message ? "red" : "#1AC073" }} type="tel" placeholder="Contact Number" {...register("number")}/>
                                        <p>{errors.number?.message}</p>
                                    </div>
                                    <div className={styles.allErrorInput}>
                                        <Form.Control className={styles.formInput} style={{ borderColor: errors.email?.message ? "red" : "#1AC073" }} type="email" placeholder="Email id" {...register("email")}/>
                                        <p>{errors.email?.message}</p>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className={styles.focusTextArea} style={{ borderColor: errors.message?.message ? "red" : "#1AC073" }} as="textarea" rows={7} placeholder="Write your messages" {...register("message")}/>
                                    <p>{errors.message?.message}</p>
                                </Form.Group>
                                <Button className={styles.contactSubmitBtn} type='submit' endIcon={<SendIcon />}>Submit</Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
