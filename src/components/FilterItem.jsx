import { useFilter } from "../contexts";

const FilterItem = ({filter, setFilterList, filterList}) => {

  const {filterDispatch} = useFilter();

  const handleClick = (filter) => {
    //to check if the filter clicked is reset all
    if(filter.name=="Reset All"){
      const resetArr = filterList.map((item)=>{
        return ({...item, active: false})
      });
      setFilterList(resetArr);
      filterDispatch({type: filter.name,payload:''})
      return;
    }
    //to track which filters are active inorder to change active states
    const temp = filterList.map((item)=>{
     return (item.name===filter.name) ? ({...item, active: !item.active}): item
    })
    setFilterList(temp);
    //dispatch to actually change filterStates
    filterDispatch({type: filter.name, payload: ""})
  }
  
  return (
    <div className={`filter-chip ${(filter.active)?"filter-chip-active ":""}paragraph2 bod1`} onClick={()=>{handleClick(filter)}}>
        <span className="material-icons md-24">{filter.icon}</span>
        <div>{filter.name}</div>
    </div>
  )
}

export default FilterItem