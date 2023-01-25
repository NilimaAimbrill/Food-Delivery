import React from 'react';
import ButtonGrp from '../../commonComponents/ButtonGroup/ButtonGroup';
import styles from './HomeKitchen.module.css'
import LoadMore from '../../commonComponents/LoadMore/LoadMore'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CommonCard from '../../commonComponents/Card/Card';
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'

function HomeKitchen() {
    return (
        <div className={styles.HomeKitchenMain}>
            <Container>
                <div className={styles.AllHomeKitchen}>
                    <h3 className={styles.HomeKitchenTitle}>Home Kitchen</h3>
                    <ButtonGrp />
                    <Form.Select  className={styles.buttonMargin} aria-label="Filter">
                        <option>Filter</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                <div className={styles.allCards}>
                    <Row>
                        <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                            <CommonCard img={img1} />
                        </Col>
                        <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                            <CommonCard img={img2} />
                        </Col>

                        <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>

                            <CommonCard img={img3} />
                        </Col>

                        <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>

                            <CommonCard img={img4} />
                        </Col>

                        <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                            <CommonCard img={img5} />
                        </Col>


                        <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                            <CommonCard img={img6} />
                        </Col>


                        <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                            <CommonCard img={img7} />
                        </Col>

                        <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>

                            <CommonCard img={img8} />
                        </Col>

                    </Row>
                    <LoadMore />

                </div>
            </Container>
        </div>
    )
}

export default HomeKitchen