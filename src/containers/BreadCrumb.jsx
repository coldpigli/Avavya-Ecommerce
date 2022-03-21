import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = ({path}) => {
  return (
    <div className="breadcrumbs gap-d30">
        <p className="paragraph2 txt-gray"><Link to="/">Home</Link> / <strong>{path}</strong></p>
    </div>
  )
}

export default BreadCrumb;