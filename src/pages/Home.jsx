import React from 'react'
import { Link } from 'react-router-dom';
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
            <div className='hero-cta'>
              <Link to="/products" className='btn btn-secondary-outline gap-d20'>
                <span class="material-icons md-24">open_in_browser</span>
                Browse Products</Link> 
              <Link to="/login" className='btn btn-secondary'>
              <span class="material-icons md-24">login</span>
                Login To Avavya</Link>
            </div>
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