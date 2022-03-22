import { useState } from "react";
import { filterItems } from "../constants"
import FilterItem from "./FilterItem"

const FilterList = () => {
  const [filterList, setFilterList] = useState(filterItems);
  return (
    <div className="filter-bar flex">
        {
            filterList.map((filter)=>{
            return <FilterItem 
              filter={filter} 
              key={filter.id}
              filterList={filterList}
              setFilterList={setFilterList}
            />})
        }
    </div>
  )
}

export default FilterList