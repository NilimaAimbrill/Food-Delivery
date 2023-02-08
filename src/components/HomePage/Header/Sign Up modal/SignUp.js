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
import { CleaningServices } from "@mui/icons-material";
import { Alert } from "react-bootstrap";
// import { LoginContext } from "../../../../Contex/LogIn/LoginContext";

const allData = [];

function SignUp(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalTwoShow, setModalTwoShow] = React.useState(false);
    const [currentScreen, setCurrentScreen] = useState("SIGNUP");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    // const [user, setUser] = useState()

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("UserData");
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         setUser(foundUser);
    //     }
    // }, []);


    const onSubmit = (data) => {
        // reset();
        if (currentScreen === "SIGNUP") {
            allData.push(data)
            localStorage.setItem("UserData", JSON.stringify(allData));
            console.log("AllData", allData);
        } else {
            console.log("mydataa", data)
            const storedData = localStorage.getItem("UserData");
            console.log("Allmydata", storedData)
            const parsedData = JSON.parse(storedData);
            parsedData.find((object) => {
                console.log(object.Email)
                if (data.Email === object.Email && data.Password === object.Password) {
                    alert("Sign in successful!");
                } else {
                    alert("Wrong email or password");
                }
                // console.log("email id" , loginData)
            })
            // if (!loginData) {
            //     console.log(1)
            //     alert("No user data found in local storage.");
            //     return;
            // }
            // console.log("parsedData", loginData)

        }
    }
    // const handleLogin = (data) => {
    //     console.log("data",data)
    //     const storedData = localStorage.getItem("UserData");
    //     const parsedData = JSON.parse(storedData);
    //     if (!storedData) {
    //         console.log(1)
    //         alert("No user data found in local storage.");
    //         return;
    //     }

    //     console.log("storedData",parsedData)

    //     if (data.email === parsedData.email && data.password === parsedData.password) {
    //         console.log(2)

    //         alert("Sign in successful!");
    //     } else {
    //         alert("Wrong email or password");

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
            <SignIn
                show={modalTwoShow}
                onHide={() => setModalTwoShow(false)}
            />
        </>
    )
}

export default SignUp