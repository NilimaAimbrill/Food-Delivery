import React from 'react'
import styles from './input.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input() {
    return (
        <div>
            <InputGroup className={styles.searchInput}>
                <Form.Control
                    className={styles.searchInput}
                    placeholder="Search food you love"
                    aria-describedby="basic-addon2"
                />
                <Button id="button-addon2" className={styles.searchButton}>
                    Search
                </Button>
            </InputGroup>
        </div>
    )
}

export default Input