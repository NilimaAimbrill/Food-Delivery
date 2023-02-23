import React, { useContext,useState } from 'react'
import styles from './Card.module.css'
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../../App';
import SignUp from '../../HomePage/Header/Sign Up modal/SignUp';

function CommonCard(product) {
    const [modalShow, setModalShow] = useState(false);

    const contextData = useContext(LoginContext);

    const cartProducts = contextData.cart;
    const isCart = cartProducts.find((item) => item.id === product.slug)
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
                                    isCart && isCart.quantity >= 1 ? (<div className={styles.inputGroup}>
                                        <button type="button" onClick={() => contextData.decrementQuantity(product.slug)}> - </button>
                                        <span>{isCart?.quantity}</span>
                                        <button type="button" onClick={() => contextData.incrementQuantity(product.slug)}> + </button>
                                    </div>)
                                        :
                                        (<Button onClick={() => addToCart(product)}>Add</Button>)
                                ) : (
                                    <Button onClick={() => setModalShow(true)}>Add</Button>
                                )
                                }
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <SignUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default CommonCard