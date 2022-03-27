import { useNavigate } from "react-router-dom";
import { useFilter } from "../contexts"

const CategoryItem = ({category}) => {

  const {filterState, filterDispatch} = useFilter();
  const {categoryState} = filterState;
  const navigate = useNavigate();
  const toggleClassName = (categoryState.includes(category.name))?"category-item category-item-active":"category-item"
  return (
    <div className={toggleClassName} onClick={()=>{
    filterDispatch({type: "Categories", payload: category.name})
    navigate("/products")
  }}>
        <span className="material-icons md-24">{category.icon}</span>
        <p className="paragraph2"><strong>{category.name}</strong></p>
    </div>
  )
}

export default CategoryItem