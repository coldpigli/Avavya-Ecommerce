import { filterItems } from "../constants"
import FilterItem from "./FilterItem"
const FilterList = () => {
  return (
    <div className="filter-bar flex">
        {
            filterItems.map((filter)=><FilterItem filter={filter} key={filter.id}/>)
        }
    </div>
  )
}

export default FilterList