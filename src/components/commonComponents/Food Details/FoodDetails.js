import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StarIcon from '@mui/icons-material/Star';
import Col from 'react-bootstrap/Col';
import styles from './FoodDetails.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useParams} from "react-router-dom"
import cardDetail from '../../HomePage/HomeKitchen/CardContent';
// import image1 from '../../images/1.png'

function FoodDetails(props) {
    // const {img,pizzaName,pizzaPrice,time,stars}=props
    const {productId} = useParams()
    const thisProduct = cardDetail.find(prod => prod.id === productId)
    return (
        <div>
            <div className={styles.foodDetailsmain}>
                <Container>
                    <div className={styles.allFoodDetails}>
                        <Row>
                            <Col md={12} lg={7} xl={6} className={styles.foodDetailsImage}>
                                <img className={styles.foodImage} src={thisProduct.img} alt='foodImage' />
                            </Col>
                            <Col md={12} lg={5} xl={6} className={styles.foodDetailsContent}>
                                <div className={styles.detailPizzaNameStars}>
                                    <h1>{thisProduct.pizzaName}</h1>
                                    <h1>{thisProduct.stars} <StarIcon /></h1>
                                </div>
                                <div className={styles.foodContent}>
                                    <h6><b>Content:</b></h6>
                                    <p>tomato ketchup,tomato,onion,chilli flakes,baking powder,
                                        processed cheese,mushroom,capsicum (green pepper),oregano,
                                        mozzarella,dry yeast
                                    </p>
                                    <h6><b>Food Recipe:</b></h6>
                                    <p>In large bowl, mix first 4 ingredients,<br />Mix water and oil; add to flour mixture,
                                        <br />Turn onto floured surface; knead for 2 minutes.
                                    </p>
                                    <h3>{thisProduct.pizzaPrice}</h3>
                                    <h6><b>Estimated time to delivery:</b> {thisProduct.time}</h6>
                                    <button className={styles.addToCartBtn}>Add to cart <AddShoppingCartIcon /></button>
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