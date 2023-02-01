import React, { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './SignIn.module.css'
// import SignUpModal from '../Sign Up modal/SignUp';

// function SignInModal(props) {
//     const [modalShow, setModalShow] = React.useState(false);
//     return (
//         <>
//             <Modal
//                 {...props}
//                 size="md"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Log In
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form className={styles.modalForm}>
//                         <div>
//                             <Form.Control className={styles.email} type="email" placeholder="name@example.com" />
//                         </div>
//                         <div>
//                             <Form.Control className={styles.email} type="password" placeholder="A.1b2c3d4!$" />
//                         </div>
//                         <div className={styles.loginButton}>
//                             <Button>Log In</Button>
//                         </div>
//                     </form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <div className={styles.modalFooterText}>
//                         Not have an account? <span className={styles.openSignUpModalBtn} onClick={() => setModalShow(true)} >Sign Up</span> here!
//                     </div>
//                 </Modal.Footer>
//             </Modal>
//             <SignUpModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </>
//     );
// }
// export default SignInModal;










function SignIn(props) {
    const [modalTwoShow, setModalTwoShow] = React.useState(false);
    return (

        <div className="container">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control className={styles.email} type="email" placeholder="Email" />
                    <Form.Control className={styles.email} type="email" placeholder="Password" />
                    <div className={styles.signupButton}>
                        <Button onClick={props.onHide}>Sign In</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer className={styles.signUpModalFooter}>
                    <p>Forgot password? <span>Reset</span> here!</p>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default SignIn