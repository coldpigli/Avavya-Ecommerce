const CategoryItem = ({category}) => {

  return (
  // ToDo: As of now all the items redirect to the products page, have to  implement filter by category to update product list  
    <div className="category-item">
        <span className="material-icons md-24">{category.icon}</span>
        <p className="paragraph2"><strong>{category.name}</strong></p>
    </div>
  )
}

export default CategoryItem