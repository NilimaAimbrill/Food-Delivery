import { style } from '@mui/system'
import React, { useContext } from 'react'
import styles from './CartPage.module.css'
import Counter from '../CounterButton/Counter'
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../../images/1.png'
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
                            <div className={styles.namePriceUnit}>
                                <p><b>{product?.name}</b></p>
                                <p><b>${product?.price}</b></p>
                                <p>{product?.unit}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.myAsideMenuRight}>
                        <div className={styles.myAsideMenuRightOne}><p><b>${(product.quantity) * (product?.price)}</b></p></div>
                        <div className={styles.myAsideMenuRightOne}><p onClick={() => cartData.removeFromCart(product.id)}><CloseIcon /></p></div>
                    </div>
                </aside>
            ))}
            <button className={styles.checkOutBtn}>
                <span>Check Out</span>
                <span>{cartData.totalPrice}</span>
            </button>
        </div>
    )
}

export default CartPage