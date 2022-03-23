import React from 'react'

import {PanelStyles, PanelBody, PanelHeader} from './styles';

function AllProductsPanel({title, ...props}) {
  return (
    <PanelStyles>
      <PanelHeader>
        <h2>{title || "DISPLAY PANEL"}</h2>
      </PanelHeader>

      <PanelBody>
        
      </PanelBody>
    </PanelStyles>
  )
}

export default AllProductsPanel