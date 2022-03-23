import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductPrice, ProductName, ProductDescription} from './styles'
import { ProductImageDropBox } from '../ProductImageDropBox';
import {Label, Input} from 'ui/forms'
import {TextArea} from 'ui/forms/textarea'

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
           
           <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox setProductImage={setProductImage}/>
           </ProductImage>


          <fieldset>
           <ProductName>
           <Label>Product Name</Label>
           <Input onChange={(e) => handleProductName(e.target.value.trim())} maxLength={30} />
           </ProductName>


           <ProductPrice>
           <Label>Product Price</Label>
           <Input onChange={(e) => handleProductPrice(e.target.value.trim())} maxLength={8} />
           </ProductPrice>
          </fieldset>


           <ProductDescription>
           <Label>Product Description</Label>
           <TextArea rows={6} onChange={(e) => handleProductDescription(e.target.value.trim())} maxLength={300} />
           </ProductDescription>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm