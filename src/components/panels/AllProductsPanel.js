import React from 'react'

import {useGetProducts} from 'hooks/useGetProducts'
import {PanelStyles, PanelBody, PanelHeader} from './styles'
import {ProductCard} from 'components/products/ProductCard'

function AllProductsPanel({title, ...props}) {

  const productData = useGetProducts()

  return (
    <PanelStyles>
      <PanelHeader>
        <h2>{title || "DISPLAY PANEL"}</h2>
        <hr />
      </PanelHeader>

      <PanelBody>
        {productData?  productData.map(product=><ProductCard key={product.uid} product={product}/>) :  null}
      </PanelBody>
    </PanelStyles>
  )
}

export default AllProductsPanel