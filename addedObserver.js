class RecentlyAddedObserver{
    constructor(name){
        this.name = name
        this.recentlyAdded = []
    }

    update(model){
        const recentlyAddedBook = model.books[model.books.length - 1]
        this.recentlyAdded.push(recentlyAddedBook);
        console.log(`In ascending order, these are the recently addded books: ${this.recentlyAdded.toString()}`);
    }
}

module.exports = {
    RecentlyAddedObserver
}