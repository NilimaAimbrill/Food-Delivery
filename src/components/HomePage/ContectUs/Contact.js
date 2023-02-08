import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import delivery_boy from '../../images/delivery_boy.png'
import styles from './Contact.module.css'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

function Contact() {
    const schema = yup.object().shape({
        name: yup.string().required("Your Name is required!"),
        email: yup.string().email("Email contains @ and . signs!").required("Your Email is required!"),
        message: yup.string().required("Your Message is required!"),

    })
    const { register, handleSubmit,reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem('HomePageData', JSON.stringify(data));
        reset();

    }
    return (
        <div className={styles.contactMain}>
            <Container>
                <div className={styles.allContact}>
                    <Row className={styles.marginBottom}>
                        <Col lg={5} xl={6} xxl={5} md={12} className={styles.contactContent}>
                            <h3>Do you have a question<br />
                                or want to become a seller?</h3>
                            <p>Fill this form and our manager will contact you next 48 hours.</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.nameEmail}>
                                    <div className={styles.inputError}>
                                        <Form.Control className={styles.focusColor} style={{ borderColor: errors.name?.message ? "red" : "#1AC073" }} type="text" placeholder="Your Name" {...register("name")} />
                                        <p>{errors.name?.message}</p>
                                    </div>
                                    <div className={styles.inputError}>
                                        <Form.Control className={styles.focusColor} style={{ borderColor: errors.email?.message ? "red" : "#1AC073" }} type="email" placeholder="Your email" {...register("email")} />
                                        <p>{errors.email?.message}</p>
                                    </div>

                                </div>
                                <div className="mb-3">
                                    <Form.Control className={styles.focusColor} style={{ borderColor: errors.message?.message ? "red" : "#1AC073" }} as="textarea" placeholder='Your message' rows={9} {...register("message")} />
                                    <p>{errors.message?.message}</p>

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