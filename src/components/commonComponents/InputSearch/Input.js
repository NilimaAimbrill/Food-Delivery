import React from 'react'
import styles from './input.module.css'
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';

function Input() {
    return (
        <div className={styles.inputMain}>
            <InputGroup className={styles.searchInput}>
                <Form.Control
                    className={styles.searchInput}
                    placeholder="Search food you love"
                    aria-describedby="basic-addon2"
                />
                <Button className={styles.searchButton} endIcon={<SearchIcon/>}></Button>
            </InputGroup>
        </div>
    )
}

export default Input