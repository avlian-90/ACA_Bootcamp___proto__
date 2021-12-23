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
    init(arr, pageSize) {
        const book = {};
        const LENGTH = Math.ceil(arr.length / pageSize);
        for (let i = 1; i <= LENGTH; i++) {
            book[i.toString()] = [arr[i], arr[i + 1], arr[i + 2], arr[i + 3]];
        }
        return book;
    }
} 

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabetArray);
console.log(Pagination.init(alphabetArray, 4));