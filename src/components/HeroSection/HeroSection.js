import React from 'react'
import heroImage from '../images/cuate.png'
import styles from './HeroSection.module.css'
import Input from '../commonComponents/InputSearch/Input'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroSection() {
    return (
        <div className={styles.heroMain}>
            <Container>
                <div className={styles.allHero}>
                    <Row>
                        <Col md={12} lg={5} xl={6} className={styles.heroContent}>
                            <h1>Authentic Home food in UK</h1>
                            <p>What2Eat is a courier service in which authentic home cook food is delivered to a customer.</p>
                            <Input />
                        </Col>
                        <Col md={12} lg={7} xl={6} className={styles.heroImage}>
                            <img className={styles.heroImageCook} src={heroImage} alt='heroImage' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection