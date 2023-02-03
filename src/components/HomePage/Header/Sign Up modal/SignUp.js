import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './SignUp.module.css'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import useFormPersist from 'react-hook-form-persist'
import SignIn from "../Sign In modal/SignIn";


function SignUp(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalTwoShow, setModalTwoShow] = React.useState(false);
    const [currentScreen, setCurrentScreen] = useState("SIGNUP");
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const schema = yup.object().shape({
        FullName: yup.string().required("Your Full name is required!"),
        Email: yup.string().email("Email contains @ and . signs!").required("Your Email is required!"),
        Password: yup.string().min(4).max(15).required(),
        ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null], "Passwords don't match, Re-enter the Password!").required(),

    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),

    })

    const onSubmit = (data) => {
        console.log(data);
        reset();


        // setFullName('');
        // setEmail('');
        // setPassword('');
        // setConfirmPassword('');
    }
    const [validated, setValidated] = useState(false);


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
                            {currentScreen !== SignUp ? "SignIn" : "SignUp"}
                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Body className={styles.inputFields}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {
                                currentScreen === "SIGNUP" &&
                                <>
                                    <Form.Control className={styles.email} type="text" style={{ borderColor: errors.FullName?.message ? "red" : "#1AC073" }} placeholder="Full name" {...register("FullName")} />
                                    <p>{errors.FullName?.message}</p>
                                </>
                            }
                            <Form.Control className={styles.email} type="email" style={{ borderColor: errors.Email?.message ? "red" : "#1AC073" }} placeholder="Email" {...register("Email")} />
                            <p>{errors.Email?.message}</p>
                            <Form.Control className={styles.email} type="password" style={{ borderColor: errors.Password?.message ? "red" : "#1AC073" }} placeholder="Password" {...register("Password")} />
                            <p>{errors.Password?.message}</p>
                            {
                                currentScreen === "SIGNUP" &&
                                <>
                                    <Form.Control className={styles.email} type="password" style={{ borderColor: errors.ConfirmPassword?.message ? "red" : "#1AC073" }} placeholder="Re-enter Password" {...register("ConfirmPassword")} />
                                    <p>{errors.ConfirmPassword?.message}</p>
                                </>
                            }

                            <div className={styles.signupButton}>
                                <Button type="submit" >{currentScreen === SignUp ? "SignIn" : "SignUp" }</Button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className={styles.signUpModalFooter}>
                        <p>Already have an account? <span onClick={() => setCurrentScreen("SIGNIN")}>{currentScreen === SignUp ? "Sign Up" : "Sign In"}</span> here!</p>
                    </Modal.Footer>
                </Modal>
            </div>
            <SignIn
                show={modalTwoShow}
                onHide={() => setModalTwoShow(false)}
            />
        </>
    )
}

export default SignUp