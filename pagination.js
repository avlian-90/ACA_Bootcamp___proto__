/* Write Pagination object that will get an array and pageSize, then will return the following.
prevPage
nextPage
firstPage
lastPage
goToPage
getPageItems

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3 */

const Pagination = {
  book: [],
  currentPage: 0,

  init(arr, pageSize) {
    let pages = [];
    for (let i = 0; i < arr.length; i++) {
      pages.push(arr[i]);

      if (i !== 0 && (i + 1) % pageSize === 0) {
        Pagination.book.push(pages);
        pages = [];
      }
    }
    Pagination.book.push(pages);
  },

  getPageItems() {
    return Pagination.book[Pagination.currentPage];
  },

  prevPage() {
    if (Pagination.currentPage !== 0) {
      Pagination.currentPage--;
    }
  },

  nextPage() {
    if (Pagination.currentPage < Pagination.book.length) {
      Pagination.currentPage++;
      return Pagination;
    }
  },

  firstPage() {
    Pagination.currentPage = 0;
  },

  lastPage() {
    Pagination.currentPage = Pagination.book.length - 1;
  },

  goToPage(pageNum) {
    if (pageNum < Pagination.book.length) {
      Pagination.currentPage = pageNum;
    }
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabetArray);
console.log(Pagination.init(alphabetArray, 4));
console.log(Pagination.getPageItems());
console.log(Pagination.nextPage());
console.log(Pagination.getPageItems());
console.log(Pagination.nextPage().nextPage());
console.log(Pagination.getPageItems());
console.log(Pagination.goToPage(5));
console.log(Pagination.getPageItems());
