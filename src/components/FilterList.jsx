import { useState } from "react";
import { filterItems } from "../constants"
import { useFilter } from "../contexts"
import FilterItem from "./FilterItem"

const FilterList = () => {
  const {filterState} = useFilter();
  const [filterList, setFilterList] = useState(filterItems);
  console.log("Checking if isdakjnsd", filterList);
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