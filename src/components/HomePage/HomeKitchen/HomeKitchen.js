import React, { useEffect, useState, useContext } from 'react';
import ButtonGrp from '../../commonComponents/ButtonGroup/ButtonGroup';
import styles from './HomeKitchen.module.css'
// import LoadMore from '../../commonComponents/LoadMore/LoadMore'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommonCard from '../../commonComponents/Card/Card';
import cardDetail from './CardContent'
import SelectDropDown from '../../commonComponents/SelectDropDown/SelectDropDown'
import FoodCategories from '../../commonComponents/Food Category Slider/FoodCategories';
import axios from 'axios'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { LoginContext } from '../../../App';
import SearchBar from '../../commonComponents/GlobalSearchBar/SearchBar';



function HomeKitchen() {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/categories.php");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(10)

    const contextData = useContext(LoginContext);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            // console.log(data.categories);
            setItem(data.categories);
            setShow(true)
            axios
                .get(`https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&language=en&search=type.slug:grocery%3Bstatus:publish&limit=${limit}`)
                .then((response) => setProducts(response.data.data))
                .then((error) => console.log(error));
        })
    }, [url, limit])
    const loadMore = () => {
        console.log("clicked")
        setLimit(limit + 15)
    }
    return (
        <div className={styles.HomeKitchenMain}>
            {!contextData.searchOpen ? (
                <Container>
                    <div className={styles.AllHomeKitchen}>
                        <h2 className={styles.HomeKitchenTitleHeading}>Home Kitchen</h2>
                        <div className={styles.categoryTitle}>
                            <h5 className={styles.HomeKitchenTitle}>Select Category:</h5>
                        </div>

                        <FoodCategories />
                        {/* <ButtonGrp />
                    <SelectDropDown className={styles.buttonMargin} /> */}
                    </div>
                    <div className={styles.categoryTitle}>
                        <h5 className={styles.HomeKitchenTitle}>All Food Items:</h5>
                        {/* <SearchBar /> */}

                    </div>
                    <div className={styles.allCards}>
                        {contextData.searchCatResults ?
                            (<Row>
                                {contextData.searchCatResults.map((result) => (
                                    <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                        <CommonCard {...result} key={result.slug} />
                                    </Col>
                                ))}
                            </Row>)

                            :
                            (<Row>
                                {products.map(product => (
                                    <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                        <CommonCard {...product} />
                                    </Col>
                                ))
                                }
                            </Row>)
                        }

                        {!contextData.query ? (
                            <Row>
                                {products.map(product => (
                                    <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                        <CommonCard {...product} />
                                    </Col>
                                ))
                                }
                            </Row>
                        ) : (
                            <Row>
                                {contextData.searchResults.map((result) => (
                                    <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                        <CommonCard {...result} key={result.slug} />
                                    </Col>
                                ))}
                            </Row>
                        )
                        }

                        <div className={styles.loadmorebtn}>
                            <Button variant="outlined" startIcon={<AddIcon />} onClick={loadMore}>
                                Load more...
                            </Button>
                        </div>
                    </div>
                </Container>
            ) : (<Container className={styles.searchIsOpen}>
                <div className={styles.categoryTitle}>
                    <FoodCategories />
                    <h5 className={styles.HomeKitchenTitle}>All Food Items:</h5>
                    {/* <SearchBar /> */}

                </div>
                <div className={styles.allCards}>
                    {contextData.searchCatResults ?
                        (<Row>
                            {contextData.searchCatResults.map((result) => (
                                <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                    <CommonCard {...result} key={result.slug} />
                                </Col>
                            ))}
                        </Row>)

                        :
                        (<Row>
                            {products.map(product => (
                                <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                    <CommonCard {...product} />
                                </Col>
                            ))
                            }
                        </Row>)
                    }

                    {!contextData.query ? (
                        <Row>
                            {products.map(product => (
                                <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                    <CommonCard {...product} />
                                </Col>
                            ))
                            }
                        </Row>
                    ) : (
                        <Row>
                            {contextData.searchResults.map((result) => (
                                <Col lg={3} xl={3} xxl={3} md={4} className={styles.cardMarginBottom}>
                                    <CommonCard {...result} key={result.slug} />
                                </Col>
                            ))}
                        </Row>
                    )
                    }

                    <div className={styles.loadmorebtn}>
                        <Button variant="outlined" startIcon={<AddIcon />} onClick={loadMore}>
                            Load more...
                        </Button>
                    </div>
                </div>
            </Container>)}
        </div>
    )
}

export default HomeKitchen