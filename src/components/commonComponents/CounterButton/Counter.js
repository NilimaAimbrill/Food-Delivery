import React, { useState, useContext } from "react";
import styles from './Counter.module.css'
import { LoginContext } from "../../../App";

function Counter() {
    const cartData = useContext(LoginContext);


    return (
        <>
            {
                cartData.cart.map(product => (
                    <div className={styles.inputGroup}>
                        <button className={styles.increseBtn} type="button" onClick={() => cartData.incrementQuantity(product.id)}> + </button>
                        <span>{product.quantity}</span>
                        <button className={styles.dicreseecreBtn} type="button" onClick={() => cartData.decrementQuantity(product.id)}> - </button>
                    </div>
                ))
            }
        </>
    );
}
export default Counter;