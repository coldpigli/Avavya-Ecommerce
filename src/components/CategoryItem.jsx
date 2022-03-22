import { useFilter } from "../contexts"

const CategoryItem = ({category}) => {

  const {filterState, filterDispatch} = useFilter();
  const {categoryState} = filterState;
  const toggleClassName = (categoryState.includes(category.name))?"category-item category-item-active":"category-item"
  return (
  // ToDo: As of now all the items redirect to the products page, have to  implement filter by category to update product list  
    <div className={toggleClassName} onClick={()=>filterDispatch({type: "Categories", payload: category.name})}>
        <span className="material-icons md-24">{category.icon}</span>
        <p className="paragraph2"><strong>{category.name}</strong></p>
    </div>
  )
}

export default CategoryItem