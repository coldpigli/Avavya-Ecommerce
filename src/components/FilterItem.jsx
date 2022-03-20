const FilterItem = ({filter}) => {
  return (
    <div class="filter-chip paragraph2 bod1">
        <span class="material-icons md-24">{filter.icon}</span>
        <div>{filter.name}</div>
    </div>
  )
}

export default FilterItem