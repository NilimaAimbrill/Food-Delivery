import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import styles from './SelectDropDown.module.css'

const Countries = [
  { label: "Veggie Pizza", value: 355 },
  { label: "Pepperoni Pizza", value: 54 },
  { label: "Meat Pizza", value: 43 },
  { label: "Margherita Pizza", value: 61 },
];

function SelectDropDown() {
    return (
      <Row className={styles.margins}>
        <div></div>
        <Col md={3} lg={3} sm={3}>
          <Select styles={{
            ...styles,
            control: (base, state) => ({
              ...base,
              '&:hover': { borderColor: '#F3BA00' }, 
              border: '1px solid #F3BA00', 
              boxShadow: 'none',
            }),
          }} className={styles.borderStyle} options={Countries} />
        </Col>
      </Row>
    );
  }

export default SelectDropDown