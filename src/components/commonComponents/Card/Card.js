import React from 'react'
import styles from './Card.module.css'
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Card from 'react-bootstrap/Card';
import AddBoxIcon from '@mui/icons-material/AddBox';

function CommonCard(props) {
    const {img,pizzaName,pizzaPrice,time,stars}=props
    return (
        <div>
            <Card className={styles.card}>
                <Card.Img className={styles.cardImage} variant="top" src={img} />
                <Card.Body className={styles.myCardBody}>
                    <Card.Text className={styles.cardBodyHead}>
                        <h5 className={styles.cardHeading}>{pizzaName}</h5>
                        <h5 className={styles.cardHeading}>{pizzaPrice}</h5>
                    </Card.Text>
                    <div className={styles.rating}>
                        <div className={styles.buttonRate}>
                            <Button startIcon={<StarIcon className={styles.starIcon} />}>
                                {stars}
                            </Button>
                            <Button>
                                {time}
                            </Button>
                        </div>
                        <div className={styles.addIcon}>
                            <AddBoxIcon className={styles.addBoxIcon}/>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CommonCard