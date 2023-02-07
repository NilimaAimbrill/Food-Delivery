import React, { useState } from "react";
import styles from './Counter.module.css'

function Counter() {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (

        <div className={styles.inputGroup}>
            <button className={styles.increDecreBtn} type="button" onClick={decNum}> - </button>
            <input type="text" className={styles.quantityInput} value={num} onChange={handleChange} />
            <button className={styles.increDecreBtn} type="button" onClick={incNum}> + </button>
        </div>

    );
}
export default Counter;