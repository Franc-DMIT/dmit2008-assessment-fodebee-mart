import React from 'react'

import {PanelStyles, PanelBody, PanelHeader} from './styles';

import {AddProduct} from 'components/products/widgets/AddProduct'

function AllProductsPanel({title, ...props}) {
  return (
    <PanelStyles>
      <PanelHeader>
        <h2>{title || "DISPLAY PANEL"}</h2>
        <hr></hr>
      </PanelHeader>

      <PanelBody>
        <AddProduct />
      </PanelBody>
    </PanelStyles>
  )
}

export default AllProductsPanel