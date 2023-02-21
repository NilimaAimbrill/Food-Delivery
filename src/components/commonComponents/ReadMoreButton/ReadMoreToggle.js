import React, { useState } from 'react'
import styles from './ReadMoreToggle.module.css'

const ReadMoreToggle = ({ children }) => {
  const [readMoreShown, setReadMoreShown] = useState(false)

  const toggleButton = () => {
    setReadMoreShown(prevState => !prevState)
  }
  return (
    <div className={styles.readMoreLess}>
      {readMoreShown ? children : children.substr(0, 200)}
      <span onClick={toggleButton}> {readMoreShown ? " Read less" : " ...Read more"}</span>
    </div>
  )
}

export default ReadMoreToggle