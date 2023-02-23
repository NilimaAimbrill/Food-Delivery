import React from 'react'
import styles from './Blog.module.css'
import Card from 'react-bootstrap/Card';

function Blog(props) {
    return (
        <div className={styles.cardSize}>
            <Card className={styles.card}>
                <Card.Img className={styles.blogImage} variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className={styles.blogHeading}><b>{props.mainLine}</b></Card.Title>
                    <Card.Text className={styles.blogPara}>
                        {props.blogParagraph}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Blog