import { CategoryList, FilterList, ProductList, SearchBar } from "../components"
import { BreadCrumb } from "../containers"
import { useFilter, useProducts } from "../contexts"
import { getProducts } from "../utils";

const Products = () => {

  const {allProducts, loading, errorFlag} = useProducts();
  const {filterState} = useFilter();
  const filteredProducts = getProducts(filterState, allProducts);

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
              Products Found: {filteredProducts.length}
            </div>
        </div>
        <ProductList productList={filteredProducts} loading={loading} errorFlag={errorFlag}/>
    </section>
    </div>
  )
}

export default Products