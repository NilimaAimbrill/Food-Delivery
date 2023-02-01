import React from 'react'
import styles from './FoodCategories.module.css'
// import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'

function FoodCategories({ data }) {
    console.log(data)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
            {/* <Carousel>
                {
                    (!data) ? "not found" : data.map(item => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={item.strCategoryThumb}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{item.strCategory}</h3>
                                    <p>{item.strCategoryDescription}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel> */}
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