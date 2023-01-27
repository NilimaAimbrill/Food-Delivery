import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Menu.module.css'
import CommonCard from '../commonComponents/Card/Card';
import LoadMore from '../commonComponents/LoadMore/LoadMore'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import img7 from '../images/7.png'
import img8 from '../images/8.png'
import Header from '../HomePage/Header/Header';
import Button from 'react-bootstrap/Button';
import Footer from '../HomePage/Footer/Footer';

function Menu() {

  return (
    <>
      <div className={styles.menuMain}>

        <div className={styles.allMenuDiv}>
          <div className={styles.menuCarousel}>
            <Container>
              <Carousel className={styles.carouselItems}>
                <Carousel.Item interval={2000}>
                  <Row className={styles.carouselFlex}>
                    <Col md={6} sm={12} xl={6}>
                      <h5>Our speciality</h5>
                      <h2>Margherita Pizza</h2>
                      <p>Topped with tomatoes or tomato sauce, mozzarella, and basil.</p>
                      <Button className={styles.orderNowBtn}>Order Now</Button>
                    </Col>
                    <Col md={6} sm={12} xl={6}>
                      <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <Row className={styles.carouselFlex}>
                    <Col md={6} sm={12} xl={6}>
                      <h5>Our speciality</h5>
                      <h2>Cheese N Corn Pizza</h2>
                      <p>Topped with tomatoes or tomato sauce, mozzarella, and basil.</p>
                      <Button className={styles.orderNowBtn}>Order Now</Button>
                    </Col>
                    <Col md={6} sm={12} xl={6}>
                      <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <Row className={styles.carouselFlex}>
                    <Col md={6} sm={12} xl={6}>
                      <h5>Our speciality</h5>
                      <h2>Cheese N Corn Pizza</h2>
                      <p>Topped with tomatoes or tomato sauce, mozzarella, and basil.</p>
                      <Button className={styles.orderNowBtn}>Order Now</Button>
                    </Col>
                    <Col md={6} sm={12} xl={6}>
                      <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Container>

          </div>

          {/* Carousel end  */}
          <div className={styles.popularDishes}>
            <Container>
              <div className={styles.popularDishesHeading}>
                <h6>Our Pizza</h6>
                <h2>POPULAR DISHES</h2>
              </div>
              <div className={styles.dishesCard}>
                <div className={styles.allCards}>
                  <Row>
                    <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                      <CommonCard img={img1} />
                    </Col>
                    <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                      <CommonCard img={img2} />
                    </Col>

                    <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>

                      <CommonCard img={img3} />
                    </Col>

                    <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>

                      <CommonCard img={img4} />
                    </Col>

                    <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                      <CommonCard img={img5} />
                    </Col>


                    <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                      <CommonCard img={img6} />
                    </Col>


                    <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>
                      <CommonCard img={img7} />
                    </Col>

                    <Col lg={4} xl={3} xxl={4} md={4} className={styles.cardMarginBottom}>

                      <CommonCard img={img8} />
                    </Col>

                  </Row>
                  <LoadMore />

                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu