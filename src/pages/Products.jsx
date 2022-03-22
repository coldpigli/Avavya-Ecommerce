import { CategoryList, FilterList, ProductList, SearchBar } from "../components"
import { BreadCrumb } from "../containers"

const Products = () => {
  return (
    <div className="product-page">
      <BreadCrumb path="Products" className="gap-d30"/>
      <SearchBar/>
      <CategoryList/>
      <FilterList/>
      <section className="product-section flex-vertical w-100">
        <div className="category-header children-centered">
            <h1 className="heading2">Showing Products</h1>
            <div className="category-cta">
              Product Count
            </div>
        </div>
        <ProductList/>
    </section>
    </div>
  )
}

export default Products