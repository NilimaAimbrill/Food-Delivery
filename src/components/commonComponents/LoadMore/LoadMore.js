import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import styles from './LoadMore.module.css'

function LoadMore() {
    return (
        <div className={styles.loadmorebtn}>
            <Button variant="outlined" startIcon={<AddIcon />}>
                Load more...
            </Button>
        </div>
    )
}

export default LoadMore

