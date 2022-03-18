import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <div class="category-item">
        <span class="material-icons md-24">{category.icon}</span>
        <p class="paragraph2"><strong>{category.name}</strong></p>
    </div>
  )
}

export default CategoryItem