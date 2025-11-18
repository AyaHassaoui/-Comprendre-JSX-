// FilterList.js
function FilterList({ items, filterFn, children }) {
  const filtered = items.filter(filterFn);
  // children est une fonction (render prop)
  return children(filtered);
}

export default FilterList;
