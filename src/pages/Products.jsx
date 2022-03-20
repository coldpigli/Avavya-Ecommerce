import { CategoryList, SearchBar } from "../components"
import { BreadCrumb } from "../containers"

const Products = () => {
  return (
    <div className="product-page">
      <BreadCrumb path="Products" className="gap-d30"/>
      <SearchBar/>
      <CategoryList/>
    </div>
  )
}

export default Products