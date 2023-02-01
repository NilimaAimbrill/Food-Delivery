import React from 'react';
import ButtonGrp from '../../commonComponents/ButtonGroup/ButtonGroup';
import styles from './HomeKitchen.module.css'
import LoadMore from '../../commonComponents/LoadMore/LoadMore'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CommonCard from '../../commonComponents/Card/Card';
import cardDetail from './CardContent'
import SelectDropDown from '../../commonComponents/SelectDropDown/SelectDropDown'


function HomeKitchen() {
    return (
        <div className={styles.HomeKitchenMain}>
            <Container>
                <div className={styles.AllHomeKitchen}>
                    <h3 className={styles.HomeKitchenTitle}>Home Kitchen</h3>
                    <ButtonGrp />
                    <SelectDropDown className={styles.buttonMargin} />
                </div>
                <div className={styles.allCards}>
                    <Row>
                        {cardDetail.map(details => (
                            <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                                <CommonCard key={details.id} {...details} />
                            </Col>
                        ))}
                    </Row>
                    <LoadMore />

                </div>
            </Container>
        </div>
    )
}

export default HomeKitchen