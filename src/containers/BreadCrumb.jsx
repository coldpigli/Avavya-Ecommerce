import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = ({path}) => {
  return (
    <div class="breadcrumbs gap-d30">
        <p class="paragraph2 txt-gray"><Link to="/">Home</Link> / <strong>{path}</strong></p>
    </div>
  )
}

export default BreadCrumb;