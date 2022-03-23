import React from 'react'
import { CategoryList, SearchBar } from '../components';
import ProductList from '../components/ProductList';
import { CategorySection } from '../containers';
import { useProducts } from '../contexts/productContext';

const Home = () => {

  const {allProducts, loading, errorFlag} = useProducts();
  const productsOnSale = allProducts.filter((item)=>item.offer);

  return (
    <>
    <section className="avavya-hero w-90">
        <div className="avavya-hero-img w-100 flex">
        </div>
        <div className="avavya-hero-txt">
            <h1 className="heading1">Order your</h1>
            <h1 className='heading1'>Daily Groceries</h1>
            <h2 className="heading2 txt-brand-color gap-d30">#Free Delivery</h2>
            {/* TODO: Implement Search Functionality */}
            <SearchBar/> 
        </div>
    </section>
    <CategorySection title="Categories" nextUrl="Products">
      <CategoryList />
    </CategorySection>
    <CategorySection title="Popular Items" nextUrl="Products">
      <ProductList productList={productsOnSale} loading={loading} errorFlag={errorFlag}/>
    </CategorySection>
    </>
  )
}

export default Home;