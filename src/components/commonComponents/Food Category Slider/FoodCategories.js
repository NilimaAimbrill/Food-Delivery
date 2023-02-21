import React from 'react';
import styles from './FoodCategories.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function FoodCategories({ data }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className={styles.mainCategoris}>
                <Carousel infinite={Boolean} responsive={responsive}>
                    {
                        (!data) ? "not found" : data.map(item => {
                            return (
                                <div className={styles.card}>
                                    <div className='card'>
                                        <img src={item.strCategoryThumb} alt='img' />
                                        <p>{item.strCategory}</p>
                                    </div>
                                </div>
                            )
                        })}
                </Carousel>
            </div>

        </div>
    )
}

export default FoodCategories