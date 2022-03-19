import CategoryItem from './CategoryItem';
import useAxios from '../utils/useAxios';
import { Loader } from '../containers';

const CategoryList = () => {

  let categoryData=[];
  const {responseData, loading, errorFlag} = useAxios("/api/categories");
  
  if(!errorFlag&&!loading){
     categoryData = responseData.categories
  }
  
  return (
    <div className="category-item-list flex children-middle wrap">
        {
         (loading)? <Loader/>
         :
         errorFlag ? <p>Uh oh! we ran into some problems</p>
         :
         categoryData.map((category)=><CategoryItem category={category} key={category.id}/>)
        }
        </div>
  )
}

export default CategoryList;