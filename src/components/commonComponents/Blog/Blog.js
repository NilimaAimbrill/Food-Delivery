import React from 'react'
import styles from './Blog.module.css'
import Card from 'react-bootstrap/Card';

function Blog(props) {
    return (
        <div className={styles.cardSize}>
            <Card className={styles.card}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className={styles.blogHeading}>Most Satisfying Cake decorating
                        Cake ideas</Card.Title>
                    <Card.Text className={styles.blogPara}>
                        Quis hendrerit nibh mauris sed faucibus.
                        Quis hendrerit nibh mauris sed faucibus.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Blog