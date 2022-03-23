import React, {useState} from 'react';

import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor'
import {useNumberFormat} from 'hooks/useNumberFormat'
import ProductPreview from 'img/logitech-g-pro.png'

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('123.45')
  const [productDescription, setProductDescription] = useState('Product Description')
  const [productImage, setProductImage] = useState(ProductPreview)

  const formatter = useNumberFormat()

  function handleProductName(name) {
    setProductName(name)
  }

  function handleProductPrice(price) {
    setProductPrice(formatter(price))
  }

  function handleProductDescription(description) {
    setProductDescription(description)
  }

  return (
        <AddProductStyles  {...props}>
           <ProductEditor 
           productName={productName} handleProductName={handleProductName}
           productPrice={productPrice} handleProductPrice={handleProductPrice}
           productDescription={productDescription} handleProductDescription={handleProductDescription}
           productImage={productImage} setProductImage={setProductImage}

           />

        </AddProductStyles>
  )
}

export default AddProduct