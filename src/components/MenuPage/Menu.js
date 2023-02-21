import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Menu.module.css'
import CommonCard from '../commonComponents/Card/Card';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';

function Menu() {
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/categories.php");
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setItem(data.categories);
      setShow(true)
      axios
        .get(`https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&language=en&search=type.slug:grocery%3Bstatus:publish&limit=${limit}`)
        .then((response) => setProducts(response.data.data))
        .then((error) => console.log(error));
    })
  }, [url, limit])
  const loadMore = () => {
    setLimit(limit + 10)
  }
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
                    {products.map(product => (
                      <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                        <CommonCard {...product} />
                      </Col>
                    ))}
                  </Row>
                  <div className={styles.loadmorebtn}>
                    <Button variant="outlined" startIcon={<AddIcon />} onClick={loadMore}>
                      Load more...
                    </Button>
                  </div>

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