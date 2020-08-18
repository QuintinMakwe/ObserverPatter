const {LeasedObserver} = require('./leasedObserver');
const {RecentlyAddedObserver} = require('./addedObserver');
const {RecentlyReturnedObserver} = require('./returnedObserver');
const {Book} = require('./book');
const book = require('./book');

let book1 = new Book();
const leasedObserver1 = new LeasedObserver('leased')
const recentlyAddedObserver1 = new RecentlyAddedObserver('added');
const recentlyReturnedObserver = new RecentlyReturnedObserver('returned'); 
book1.addObserver(recentlyAddedObserver1)
book1.addObserver(leasedObserver1)
book1.addObserver(recentlyReturnedObserver)
book1.addBook('Story of our lives')
book1.addBook('John wick')
book1.addBook('cinderalla')
book1.lendBook('john wick')
book1.lendBook('cinderalla')
// console.log(book1)