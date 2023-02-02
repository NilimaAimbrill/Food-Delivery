import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StarIcon from '@mui/icons-material/Star';
import Col from 'react-bootstrap/Col';
import styles from './FoodDetails.module.css'
import image1 from '../../images/1.png'

function FoodDetails(props) {

    return (
        <div>
            <div className={styles.foodDetailsmain}>
                <Container>
                    <div className={styles.allFoodDetails}>
                        <Row>
                            <Col md={12} lg={7} xl={6} className={styles.foodDetailsImage}>
                                <img className={styles.foodImage} src={image1} alt='foodImage' />
                            </Col>
                            <Col md={12} lg={5} xl={6} className={styles.foodDetailsContent}>
                                <div className={styles.detailPizzaNameStars}>
                                    <h1>Pizza Name</h1>
                                    <h1>4.5<StarIcon /></h1>
                                </div>
                                <div className={styles.foodContent}>
                                    <h6>Content:</h6>
                                    <p>tomato ketchup,tomato,onion,chilli flakes,baking powder,
                                        processed cheese,mushroom,capsicum (green pepper),oregano,
                                        mozzarella,dry yeast
                                    </p>
                                    <h6>Food Recipe:</h6>
                                    <p>In large bowl, mix first 4 ingredients,<br />Mix water and oil; add to flour mixture,
                                        <br />Turn onto floured surface; knead for 2 minutes.
                                    </p>
                                    <h3>$30</h3>
                                    <button className={styles.addToCartBtn}>Add to card</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default FoodDetails