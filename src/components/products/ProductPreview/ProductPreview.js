import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'

function ProductPreview ({children, productName, productPrice, productDescription, productImage, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
           <ProductImage>
            <img src={productImage} alt="placeholder product image" width="320" height="184" />
           </ProductImage>


           <ProductName>{productName}</ProductName>


           <ProductPrice>${productPrice}</ProductPrice>

           
           <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
  )
}

export default ProductPreview