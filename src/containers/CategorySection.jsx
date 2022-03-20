import React from 'react'
import { Link } from 'react-router-dom'

const CategorySection = ({children, title, variation, nextUrl}) => {
  return (
    <section className={`category-section flex-vertical`}>
        <div className="category-header children-centered">
            <h1 className="heading2">{title}</h1>
            <div className="category-cta">
              <Link to={`/${nextUrl}`}>
                <button className="btn btn-primary">See all</button>
              </Link>
            </div>
        </div>
        {children}
    </section>
  )
}

export default CategorySection