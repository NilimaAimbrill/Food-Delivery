import React from 'react'
import styles from './Card.module.css'
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Card from 'react-bootstrap/Card';
import AddBoxIcon from '@mui/icons-material/AddBox';

function CommonCard(props) {
    return (
        <div>
            <Card className={styles.card}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body className={styles.myCardBody}>
                    <Card.Text className={styles.cardBodyHead}>
                        <h5 className={styles.cardHeading}>Home made pizza</h5>
                        <h5 className={styles.cardHeading}>$19</h5>
                    </Card.Text>
                    <div className={styles.rating}>
                        <div className={styles.buttonRate}>
                            <Button startIcon={<StarIcon />}>
                                4.7
                            </Button>
                            <Button>
                                50-79 min
                            </Button>
                        </div>
                        <div className={styles.addIcon}>
                            <AddBoxIcon />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CommonCard