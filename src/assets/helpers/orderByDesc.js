// compare every element with another and sorting it Z-A
function orderByDesc(a, b) {
  if (b.name < a.name) {
    return -1;
  }
  if (b.name > a.name) {
    return 1;
  }
  return 0;
}

export default orderByDesc;