// Function that decides how many employees there should be on every page
const getPages = (arr, itemsPerPage) => {
  let pages = [];

  for (let i = 0; i < arr.length; i += itemsPerPage) {
    pages.push(arr.slice(i, i + itemsPerPage));
  }
  return pages;
}

export default getPages;