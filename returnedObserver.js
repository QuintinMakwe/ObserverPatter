class RecentlyReturnedObserver{
    constructor(){
        this.recentlyReturned= []
    }

    update(model){
        const recentlyReturnedBook = model.books[model.books.length - 1]
        this.recentlyReturned.push(recentlyReturnedBook);
        console.log(`In ascending order, these are the recently returned books: ${this.recentlyReturned.toString()}`);
    }
}

module.exports = {
    RecentlyReturnedObserver
}