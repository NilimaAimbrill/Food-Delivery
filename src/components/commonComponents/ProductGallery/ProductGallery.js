import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

import styles from './ProductGallery.module.css'
import noImageAvailable from '../../images/no-image-icon-15.png'

function ProductGallery(product) {

  const [products, setProducts] = useState();
  const [currentImage, setCurrentImage] = useState();
  let { productId } = useParams();
  console.log("productId", productId)
  useEffect(() => {
    // setLoading(true);
    axios
      .get(`https://mock.redq.io/api/products/${productId}`)
      .then((response) => {
        setProducts(response.data)
        console.log("response", response)
        setCurrentImage(response.data?.image?.thumbnail);
        // setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [productId]);
  // const products = products.find(prod => prod.slug === productId)
  // const {img,pizzaName,pizzaPrice,time,stars}=props
  // console.log("products",)


  const handleImageClick = (_image) => {
      setCurrentImage(_image)
      
  }
  console.log("currentImage", currentImage)
  return (
    <div className={styles.allPhotos}>
      <div className={styles.photoGalleryCollumns}>
        {products?.gallery?.map((gal) => (
          <img src={gal?.thumbnail} alt={noImageAvailable} onClick={() => handleImageClick(gal?.thumbnail)} />
        ))
        }
      </div>
      <div className={styles.mainProductImage}>
        <img className={styles.foodImage} src={currentImage} alt={noImageAvailable} />
      </div>
    </div>
  )
}

export default ProductGallery