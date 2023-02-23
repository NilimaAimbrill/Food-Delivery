import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from './CartPage.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { LoginContext } from '../../../App';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


function CartPage() {
    const cartData = useContext(LoginContext);
    const { toggleDrawer } = useContext(LoginContext);

    return (
        <div className={styles.mainCartPage}>
            <div className={styles.cartPageHeader}>
            <span className={styles.bagIconQuantity}>
                <span><ShoppingBagIcon/></span>
                <p><b>{cartData.productCount} Items</b></p>
            </span>
                <span className={styles.closeIconOfDrawer} onClick={toggleDrawer}><CloseIcon /></span>
            </div>
            <hr/>
            {cartData.cart.map(product => (
                <aside key={product.id} className={styles.myAsideMenu}>
                    <div className={styles.myAsideMenuLeft}>
                        <div className={styles.leftMain}>
                            <div className={styles.inputGroup}>
                                <button className={styles.increseBtn} type="button" onClick={() => cartData.incrementQuantity(product.id)}> + </button>
                                <span>{product.quantity}</span>
                                <button className={styles.dicreseecreBtn} type="button" onClick={() => cartData.decrementQuantity(product.id)}> - </button>
                            </div>
                            <img src={product?.image?.thumbnail} alt="image" />
                            <Link className={styles.namePriceUnit} to={`/food_details/${product.slug}`} onClick={toggleDrawer}>
                                <p><b>{product?.name}</b></p>
                                <p><b>${(product?.price).toFixed(2)}</b></p>
                                <p>{product?.unit}</p>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.myAsideMenuRight}>
                        <div className={styles.myAsideMenuRightOne}><p><b>${((product.quantity) * (product?.price)).toFixed(2)}</b></p></div>
                        <div className={styles.myAsideMenuRightOne}><p onClick={() => cartData.removeFromCart(product.id)}><CloseIcon /></p></div>
                    </div>
                </aside>
            ))}
            <Link className={styles.checkOutBtn} onClick={toggleDrawer}  to="/checkoutpage">
                <span>Check Out</span>
                <span>${(cartData.totalPrice).toFixed(2)}</span>
            </Link>
        </div>
    )
}

export default CartPage