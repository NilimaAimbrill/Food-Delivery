import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './CheckOutPage.module.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginContext } from '../../../App';
import { Link } from 'react-router-dom';


function CheckOutPage() {

    const schema = yup.object().shape({
        name: yup.string().required("Your Name is required!"),
        email: yup.string().email("Email contains @ and . signs!").required("Your Email is required!"),
        number: yup.number().positive().integer().required("Your Phone number is required!"),
        address: yup.string().required("Your Address is required!"),

    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        localStorage.setItem('ContactData', JSON.stringify(data));
        console.log("data",data)
        reset();

    }
    const cartData = useContext(LoginContext);
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.mainCheckOut}>
                    <Row>
                        <Col md={12} lg={8} xl={8} className={styles.cartPageLeft}>
                            <div className={styles.contactFormInputs}>
                                <Form.Group className={styles.inputFlex} controlId="exampleForm.ControlInput1">
                                    <div className={styles.allErrorInput}>
                                        <Form.Control className={styles.formInput} style={{ borderColor: errors.name?.message ? "red" : "#1AC073" }} type="text" placeholder="First Name" {...register("name")} />
                                        <p>{errors.name?.message}</p>
                                    </div>
                                    <div className={styles.allErrorInput}>
                                        <Form.Control className={styles.formInput} style={{ borderColor: errors.lastname?.message ? "red" : "#1AC073" }} type="text" placeholder="Last Name" {...register("lastname")} />
                                        <p>{errors.lastname?.message}</p>
                                    </div>
                                </Form.Group>
                                <Form.Group className={styles.inputFlex} controlId="exampleForm.ControlInput1">
                                    <div className={styles.allErrorInput}>
                                        <Form.Control className={styles.formInput} style={{ borderColor: errors.number?.message ? "red" : "#1AC073" }} type="tel" placeholder="Contact Number" {...register("number")} />
                                        <p>{errors.number?.message}</p>
                                    </div>
                                    <div className={styles.allErrorInput}>
                                        <Form.Control className={styles.formInput} style={{ borderColor: errors.email?.message ? "red" : "#1AC073" }} type="email" placeholder="Email Id" {...register("email")} />
                                        <p>{errors.email?.message}</p>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className={styles.focusTextArea} style={{ borderColor: errors.address?.message ? "red" : "#1AC073" }} as="textarea" rows={7} placeholder="Write your address" {...register("address")} />
                                    <p>{errors.address?.message}</p>
                                </Form.Group>
                            </div>
                        </Col>
                        <Col md={12} lg={4} xl={4} className={styles.cartPageRight}>
                            <h4>Your Order</h4>
                            {cartData.cart.map(product => (
                                <div className={styles.productsOfCart}>
                                    <span>{product.quantity} x {product?.name}</span>
                                    <span>${((product.quantity) * (product?.price)).toFixed(2)}</span>
                                </div>
                            ))}
                            <hr />
                            <div className={styles.payableAmountAll}>
                                <div className={styles.subTotal}>
                                    <span>Sub Total</span>
                                    <span>${cartData.totalPrice.toFixed(2)}</span>
                                </div>
                                <div className={styles.tax}>
                                    <span>Tax</span>
                                    <span>$5.00</span>
                                </div>
                                <div className={styles.shipping}>
                                    <span>Estimated Shipping</span>
                                    <span>$2.00</span>
                                </div>
                                <hr />
                                <hr />
                                <div className={styles.grandTotal}>
                                    <span><b>Total</b></span>
                                    <span><b>${(cartData.totalPrice + 7).toFixed(2)}</b></span>
                                </div>
                            </div>
                            <hr />
                            <div className={styles.paymentMethod}>
                                <select aria-label="Default select example">
                                    <option>Choose Payment Method</option>
                                    <option value="1">Cash On Delivery</option>
                                    <option value="2">UPI</option>
                                    <option value="3">Credit Card</option>
                                </select>
                            </div>
                            <Link className={styles.continueShoppingBtn} to="/">Continue Shopping</Link>
                        </Col>
                    </Row>
                    <Button className={styles.contactSubmitBtn} type='submit' endIcon={<StorefrontIcon />}>Order Now</Button>
                </div>
            </form>
        </Container>
    )
}
export default CheckOutPage