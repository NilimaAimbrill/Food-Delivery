import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './SignUp.module.css'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import useFormPersist from 'react-hook-form-persist'
import SignIn from "../Sign In modal/SignIn";
import { CleaningServices } from "@mui/icons-material";
import { Alert } from "react-bootstrap";
import LoginStateContext from "../../../../Contex/LoginStateContext";
import { LoginContext } from "../../../../App";

const allData = [];

function SignUp(props) {
    const [modalShow, setModalShow] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("SIGNUP");
    const contextData = useContext(LoginContext);

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
        // reset();
        if (currentScreen === "SIGNUP") {
            allData.push(data)
            localStorage.setItem("UserData", JSON.stringify(allData));
            alert("signed up sucessfully")
            console.log("AllData", allData);
        } else {
            console.log("mydataa", data)
            const storedData = localStorage.getItem("UserData");
            console.log("Allmydata", storedData)
            const parsedData = JSON.parse(storedData);

            parsedData.find((object) => {
                console.log(object.Email)
                if (data.Email === object.Email && data.Password === object.Password) {
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
                                {currentScreen === "SIGNUP" ? (
                                    <Button type="submit" >Sign Up</Button>
                                ) : (
                                    <Button type="submit">Sign In</Button>
                                )
                                }
                            </div>
                        </form>
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