
class ProductList extends Array {
  constructor(...args) {
    super(...args);
  }

  // orderBy(criteria, order) {
  //   switch (order) {
  //     case 'asc':
  //       return this.sort((a, b) => a.name - b.name);
  //     case 'desc':
  //       return this.sort((a, b) => b.name - a.name);

  //     default:
  //       return this;
  //   }
  // }

  getPages(itemsPerPage) {
    let pages = [];

    for (let i = 0; i < this.length; i += itemsPerPage) {
      pages.push(this.slice(i, i + itemsPerPage));
    }

    return pages;
  }
}

export default ProductList;