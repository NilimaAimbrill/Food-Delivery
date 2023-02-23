import React,{useContext} from 'react'
import heroImage from '../../images/cuate.png'
import styles from './HeroSection.module.css'
import Input from '../../commonComponents/InputSearch/Input'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartPage from '../../commonComponents/CartPage/CartPage';
import { LoginContext } from '../../../App';


function HeroSection() {
    const contextData = useContext(LoginContext);
    return (
        <div className={styles.heroMain}>
        {!contextData.searchOpen ? (
            <Container>
                <div className={styles.allHero}>
                    <Row>
                        <Col md={12} lg={5} xl={6} className={styles.heroContent}>
                            <h1>Groceries Delivered in 90 Minute</h1>
                            <p>Get your healthy foods & snacks delivered at your doorsteps all day everyday.</p>
                            {/* <Input /> */}
                        </Col>
                        <Col md={12} lg={7} xl={6} className={styles.heroImage}>
                            <img className={styles.heroImageCook} src={heroImage} alt='heroImage' />
                        </Col>
                    </Row>
                </div>
                
            </Container>):(<Container></Container>)}
        </div>
    )
}

export default HeroSection