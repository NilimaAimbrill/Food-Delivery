import React,{useContext} from 'react'
import styles from './input.module.css'
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import { LoginContext } from '../../../App';

function Input() {
    const contextData = useContext(LoginContext);
    return (
        <div className={styles.inputMain}>
            <InputGroup className={styles.searchInput}>
                <Form.Control
                    className={styles.searchInput}
                    placeholder="Search food you love"
                    aria-describedby="basic-addon2"
                    value={contextData.searchQuery}
                    onChange={(e) => contextData.setSearchQuery(e.target.value)}
                />
                <Button className={styles.searchButton} endIcon={<SearchIcon />}></Button>
            </InputGroup>
        </div>
    )
}

export default Input