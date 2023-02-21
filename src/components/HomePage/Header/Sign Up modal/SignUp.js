import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './SignUp.module.css'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginContext } from "../../../../App";

const allData = [];

function SignUp(props) {
    const [modalShow, setModalShow] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("SIGNUP");
    const contextData = useContext(LoginContext);

    const schema = currentScreen === "SIGNUP" ? yup.object().shape({
        FullName: yup.string().required("Your Full name is required!"),
        Email: yup.string().email("Email contains @ and . signs!").required("Your Email is required!"),
        Password: yup.string().min(4).max(15).required(),
        ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null], "Passwords don't match, Re-enter the Password!").required(),
    }) : yup.object().shape({
        email: yup.string(),
        password: yup.string(),
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),

    })

    localStorage.getItem("UserData") ? contextData.setIsLoggedIn(true) : contextData.setIsLoggedIn(false)
    const onSubmit = (data) => {
        // reset();
        if (currentScreen === "SIGNUP") {
            allData.push({ ...data })
            localStorage.setItem("UserData", JSON.stringify(allData));
            alert("signed up sucessfully")

        } else {

            const storedData = localStorage.getItem("UserData");
            const parsedData = JSON.parse(storedData);

            parsedData.find((object) => {
                if (data.email === object.Email && data.password === object.ConfirmPassword) {
                    { contextData.setIsLoggedIn(true) }
                    alert("Sign in successful!");
                    modalShow(false)
                } else {
                    { contextData.setIsLoggedIn(false) }
                    alert("Wrong email or password");
                }

            })
        }
    }

    return (
        <>
            <div className="container">
                <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    id="signUpModalMain"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className={styles.signUpHeading}>
                            {currentScreen === "SIGNUP" ? "Sign Up" : "Sign In"}
                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Body className={styles.inputFields}>
                        {currentScreen === "SIGNUP" ? (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Control className={styles.email} type="text" style={{ borderColor: errors.FullName?.message ? "red" : "#1AC073" }} placeholder="Full name" {...register("FullName")} />
                                <p>{errors.FullName?.message}</p>
                                <Form.Control className={styles.email} type="email" style={{ borderColor: errors.Email?.message ? "red" : "#1AC073" }} placeholder="Email" {...register("Email")} />
                                <p>{errors.Email?.message}</p>
                                <Form.Control className={styles.email} type="password" style={{ borderColor: errors.Password?.message ? "red" : "#1AC073" }} placeholder="Password" {...register("Password")} />
                                <p>{errors.Password?.message}</p>
                                <Form.Control className={styles.email} type="password" style={{ borderColor: errors.ConfirmPassword?.message ? "red" : "#1AC073" }} placeholder="Re-enter Password" {...register("ConfirmPassword")} />
                                <p>{errors.ConfirmPassword?.message}</p>
                                <div className={styles.signupButton}>
                                    <Button type="submit" >Sign Up</Button>
                                </div>
                            </form>
                        )
                            :
                            (
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Control className={styles.email} type="email" style={{ borderColor: errors.email?.message ? "red" : "#1AC073" }} placeholder="Email" {...register("email")} />
                                    <p>{errors.email?.message}</p>
                                    <Form.Control className={styles.email} type="password" style={{ borderColor: errors.password?.message ? "red" : "#1AC073" }} placeholder="Password" {...register("password")} />
                                    <p>{errors.password?.message}</p>
                                    <div className={styles.signupButton}>
                                        <Button type="submit" >Sign In</Button>
                                    </div>
                                </Form>
                            )
                        }
                    </Modal.Body>
                    <Modal.Footer className={styles.signUpModalFooter}>
                        <p>Already have an account? <span onClick={() => currentScreen === "SIGNUP" ? setCurrentScreen("SIGNIN") : setCurrentScreen("SIGNUP")}>{currentScreen === "SIGNUP" ? "Sign In" : "Sign Up"}</span> here!</p>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default SignUp