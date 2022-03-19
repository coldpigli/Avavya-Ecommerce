import React from 'react'
import { Link } from 'react-router-dom'

const CategorySection = ({children, title, variation, nextUrl}) => {
  return (
    <section class={`category-section flex-vertical`}>
        <div class="category-header children-centered">
            <h1 class="heading2">{title}</h1>
            <div class="category-cta">
              <Link to={`/${nextUrl}`}>
                <button class="btn btn-primary">See all</button>
              </Link>
            </div>
        </div>
        {children}
    </section>
  )
}

export default CategorySection