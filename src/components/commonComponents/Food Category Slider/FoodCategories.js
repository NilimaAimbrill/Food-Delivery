import React,{useContext} from 'react'
import styles from './FoodCategories.module.css'
import fruits from '../../images/fruits-veges.png'
import meat from '../../images/meat-fish.png'
import snack from '../../images/snacks.png'
import pet from '../../images/pet-care.jpg'
import cleaning from '../../images/home-cleaning.png'
import dairy from '../../images/dairy.png'
import coocking from '../../images/cooking.png'
import breakfast from '../../images/breakfast.png'
import beverage from '../../images/beverage.jpg'
import beauty from '../../images/health-beauty.jpg'
import { LoginContext } from '../../../App'

function FoodCategories() {
    const contextData = useContext(LoginContext);
    return (
        <div className={styles.allProductCategories}>
            <div className={styles.allProductCategoriesTwo}>
                <div className={styles.productCategory} onClick={contextData.handleCatSelectFruit}>
                    <div className={styles.productCategoryImage}>
                        <img src={fruits} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Fruits & Vegetables</div>
                </div>

                <div className={styles.productCategory} onClick={contextData.handleCatSelectMeat}>
                    <div className={styles.productCategoryImage}>
                        <img src={meat} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Meat & Fish</div>
                </div>
            </div>
            <div className={styles.allProductCategoriesTwo} onClick={contextData.handleCatSelectSnack}>
                <div className={styles.productCategory}>
                    <div className={styles.productCategoryImage}>
                        <img src={snack} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Snacks</div>
                </div>

                <div className={styles.productCategory} onClick={contextData.handleCatSelectPet}>
                    <div className={styles.productCategoryImage}>
                        <img src={pet} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Pet Care</div>
                </div>
            </div>
            <div className={styles.allProductCategoriesTwo}>
                <div className={styles.productCategory} onClick={contextData.handleCatSelectHome}>
                    <div className={styles.productCategoryImage}>
                        <img src={cleaning} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Home & Cleaning</div>
                </div>
                <div className={styles.productCategory} onClick={contextData.handleCatSelectDairy}>
                    <div className={styles.productCategoryImage}>
                        <img src={dairy} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Dairy</div>
                </div>
            </div>
            <div className={styles.allProductCategoriesTwo}>
                <div className={styles.productCategory} onClick={contextData.handleCatSelectCooking}>
                    <div className={styles.productCategoryImage}>
                        <img src={coocking} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Cooking</div>
                </div>

                <div className={styles.productCategory} onClick={contextData.handleCatSelectBreakfast}>
                    <div className={styles.productCategoryImage}>
                        <img src={breakfast} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Breakfast</div>
                </div>
            </div>
            <div className={styles.allProductCategoriesTwo}>
                <div className={styles.productCategory} onClick={contextData.handleCatSelectBeverages}>
                    <div className={styles.productCategoryImage}>
                        <img src={beverage} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Beverage</div>
                </div>

                <div className={styles.productCategory} onClick={contextData.handleCatSelectHealthAndBeauty}>
                    <div className={styles.productCategoryImage}>
                        <img src={beauty} alt='category' />
                    </div>
                    <div className={styles.productCategorName}>Health & Beauty</div>
                </div>
            </div>
        </div>
    )
}

export default FoodCategories