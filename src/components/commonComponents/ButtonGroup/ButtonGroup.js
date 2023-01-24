import React from 'react'
import styles from './ButtonGroup.module.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';


function ButtonGrp() {
    return (
        <div className={styles.buttoGroupMain}>
            <ButtonGroup aria-label="Basic example">
                <Button className={cx(styles.button0 ,styles.button1)}>All</Button>
                <Button className={cx(styles.button1 ,styles.btnGrey)}>Button</Button>
                <Button className={cx(styles.button1 ,styles.btnGrey)}>Free delivery</Button>
                <Button className={cx(styles.button1 ,styles.btnGrey)}>New</Button>
                <Button className={cx(styles.button2 ,styles.button1 ,styles.btnGrey)}>Coming</Button>
            </ButtonGroup>
        </div>
    )
}

export default ButtonGrp