import React, { useEffect, useState } from 'react';
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
import FoodCategories from '../../commonComponents/Food Category Slider/FoodCategories';


function HomeKitchen() {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/categories.php");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data.categories);
            setItem(data.categories);
            setShow(true)
        })
    }, [url])
    return (
        <div className={styles.HomeKitchenMain}>
            <Container>
                <div className={styles.AllHomeKitchen}>
                    <h2 className={styles.HomeKitchenTitle}>Home Kitchen</h2>
                    <div className={styles.categoryTitle}>
                        <h5 className={styles.HomeKitchenTitle}>Select Category:</h5>
                    </div>

                    {
                        show ? <FoodCategories data={item} /> : "not found"
                    }


                    {/* <ButtonGrp />
                    <SelectDropDown className={styles.buttonMargin} /> */}
                </div>
                <div className={styles.categoryTitle}>
                        <h5 className={styles.HomeKitchenTitle}>All Food Items:</h5>
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