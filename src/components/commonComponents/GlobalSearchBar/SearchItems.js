import React, { useContext } from 'react'
import styles from '../Card/Card.module.css'
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../../App';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommonCard from '../Card/Card';


function SearchItem(product) {

    const contextData = useContext(LoginContext);

    return (
        <div>
            <h1>Searched Items</h1>
            {contextData.searchResults.map((result) => (
                <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                    <CommonCard {...result} key={result.slug} />
                </Col>
            ))}
        </div>
    )
}

export default SearchItem