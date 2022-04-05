import React, {useState} from 'react';

import {AddProductStyles} from './styles'
import {ProductEditor} from 'components/products/ProductEditor'
import {useNumberFormat} from 'hooks/useNumberFormat'
import {useAddNewProduct} from 'hooks/useAddNewProduct'
import ProductPreview from 'img/logitech-g915.png'

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('123.45')
  const [productDescription, setProductDescription] = useState('Product Description')
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, path:null})
  const [loading, productLoader] = useAddNewProduct()

  const formatter = useNumberFormat()

  function handleSubmit (e) {
    e.preventDefault();

    const productData = {
      productName,
      productPrice,
      productDescription
    }
    
    setIsWriting(true)
    productLoader(productData, productImage)
  }

  function handleProductName(name) {
    setProductName(name)
  }

  function handleProductPrice(price) {
    setProductPrice(formatter(price))
  }

  function handleProductDescription(description) {
    setProductDescription(description)
  }

  if (isWriting) {
    return <h1>Editor Feedback Component</h1>
  } 
  else {
        return (
          <AddProductStyles  {...props}>
            <ProductEditor 
            productImage={productImage}
            setProductImage={setProductImage}
            productName={productName}
            handleProductName={handleProductName}
            productPrice={productPrice} 
            handleProductPrice={handleProductPrice}
            productDescription={productDescription} 
            handleProductDescription={handleProductDescription}
            handleSubmit={handleSubmit}
            />

          </AddProductStyles>
    )
  }
}

export default AddProduct