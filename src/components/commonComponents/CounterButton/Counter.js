import React, { useState,useContext } from "react";
import styles from './Counter.module.css'
import { LoginContext } from "../../../App";

function Counter() {
    let [num, setNum] = useState(0);
    const counterContext = useContext(LoginContext);

    let incNum = () => {
        if (counterContext.isLoggedIn === true) {
            if (num < 10) {
                setNum(Number(num) + 1);
            }
        }else {
            alert("Please login")
        }
    };
    let decNum = () => {
        if (counterContext.isLoggedIn === true){
            if (num > 0) {
                setNum(num - 1);
            }
        }else {
            alert("Please login")
        }
        
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (

        <div className={styles.inputGroup}>
            <button className={styles.increseBtn} type="button" onClick={decNum}> - </button>
            <input type="text" className={styles.quantityInput} value={num} onChange={handleChange} />
            <button className={styles.dicreseecreBtn} type="button" onClick={incNum}> + </button>
        </div>

    );
}
export default Counter;