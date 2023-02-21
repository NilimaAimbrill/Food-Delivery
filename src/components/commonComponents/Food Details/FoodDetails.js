import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StarIcon from '@mui/icons-material/Star';
import Col from 'react-bootstrap/Col';
import styles from './FoodDetails.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from "react-router-dom";
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReadMoreToggle from '../ReadMoreButton/ReadMoreToggle';
import ProductGallery from '../ProductGallery/ProductGallery';
import CommonCard from '../Card/Card';


function FoodDetails() {

    const [products, setProducts] = useState();
    let { productId } = useParams();
    useEffect(() => {
        axios
            .get(`https://mock.redq.io/api/products/${productId}`)
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => console.log(error));
    }, [productId]);
   
    return (
        <div>
            <div className={styles.foodDetailsmain}>
                <Container>
                    <div className={styles.allFoodDetails}>
                        <Row className={styles.allContentRow}>
                            <Col md={12} lg={6} xl={6} className={styles.foodDetailsImage}>
                                <div className={styles.productGalleryImages}>
                                    <ProductGallery />
                                </div>
                            </Col>
                            <Col md={12} lg={6} xl={6} className={styles.foodDetailsContent}>
                                <div className={styles.detailPizzaNameStars}>
                                    <h1>{products?.name}</h1>
                                    <div className={styles.heartIcon}><FavoriteBorderIcon /></div>
                                </div>
                                <div className={styles.foodContent}>
                                    <div className={styles.unitRating}>
                                        <p className={styles.unitNumbers}>{products?.unit}</p>
                                        <button>{products?.ratings} <StarIcon /></button>
                                    </div>
                                    <div className={styles.descriptionMargin}>
                                        <h6><b>Description:</b></h6>
                                        {
                                            products?.description &&
                                            <ReadMoreToggle>{products?.description}</ReadMoreToggle>

                                        }
                                    </div>
                                    <div className={styles.priceSale}>
                                        <h6><b>${products?.sale_price}</b></h6>
                                        <p className={styles.cancelPrice}>${products?.price}</p>
                                    </div>
                                    <div className={styles.btnAvailableItem}>
                                        <button className={styles.addToCartBtn}>Add to cart <AddShoppingCartIcon /></button>
                                        <p>{products?.quantity} pieces available</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className={styles.detailsProducts}>
                            <h6>Details:</h6>
                            <p>{products?.description}</p>
                        </div>
                        <hr />
                        <div className={styles.relatedProductsMain}>
                        <h1 className={styles.relatedHeading}>Related Products:</h1>
                            <Row>
                                {products?.related_products?.map(product => (
                                    <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                        <CommonCard {...product} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default FoodDetails