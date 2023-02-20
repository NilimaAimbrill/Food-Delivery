import React, { useContext } from 'react'
import styles from './Card.module.css'
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Card from 'react-bootstrap/Card';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import Counter from '../CounterButton/Counter';
import { LoginContext } from '../../../App';

function CommonCard(product) {

    const contextData = useContext(LoginContext);

    const cartProducts = contextData.cart;
    console.log("sdjhsdsjd", contextData.cart)
    const isCart = cartProducts.find((item) => item.id === product.slug)
    console.log("productId", product.slug)
    const { addToCart } = useContext(LoginContext);

    return (
        <div>
            <Card className={styles.card}>
                <Card.Img className={styles.cardImage} variant="top" src={product.image.thumbnail} />
                <Card.Body className={styles.myCardBody}>
                    <Card.Text as={Link} to={`/food_details/${product.slug}`} className={styles.cardBodyHead}>
                        <h5 className={styles.cardHeading} >{product.name}</h5>
                        <h5 className={styles.cardHeading}>${product.price}</h5>
                    </Card.Text>
                    <div className={styles.rating}>
                        <div className={styles.buttonRate}>
                            {/* <Button startIcon={<StarIcon className={styles.starIcon} />}>
                                {product.ratings}
                            </Button> */}
                            <div className={styles.esimatedTime}>
                                {contextData.isLoggedIn === true ? (
                                    !isCart ? (<Button onClick={() => addToCart(product)}>Add</Button>)
                                        :
                                        (<div className={styles.inputGroup}>
                                            <button type="button"  onClick={() => contextData.decrementQuantity(product.slug)}> - </button>
                                            <span> 0 </span>
                                            <button type="button" onClick={() => contextData.incrementQuantity(product.slug)}> + </button>
                                        </div>)


                                ) : (
                                    <Button onClick={() => alert("Please sign in")}>Add</Button>
                                )
                                }
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )
}

export default CommonCard