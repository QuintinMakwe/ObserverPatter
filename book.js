const chalk = require('chalk');
class Book{
    constructor(){
        this.books = [],
        this.leased = [],
        this.observers = []
    }

    helperBookExist(bookName){
        if(!this.books.includes(bookName.toLowerCase())){
            return false
        }else {
            return true
        }
    }

    addBook(bookName){
        const bookExist = this.helperBookExist(bookName)
        if(!bookExist){
            this.books.push(bookName.toLowerCase())

            //notify observer
            this.notifyObservers('added')
            return this.books
        }else{
            return "Book already exists"
        }
    }

    getAllBooks(){
        return this.books
    }

    deleteBook(bookName){
        const bookExist = this.helperBookExist(bookName)
        if(bookExist){
            //get index of book 
            const bookIndex = this.books.indexOf(bookName.toLowerCase());
            //delete the book
            this.books.splice(bookIndex, 1);
            //return the new array

            //inform the notify 
            this.notifyObservers('added')
            return this.books
        }else{
            return "No such book in shelf"
        }

        
    }

    lendBook(bookName){
        const bookExist = this.helperBookExist(bookName)
        if(bookExist){
            this.deleteBook(bookName);
            this.leased.push(bookName.toLowerCase())

            //notify the observers 
            this.notifyObservers('leased')
            return this.leased
        }else{
            return "No such book in shelf"
        }
    }

    addObserver(o){
        this.observers.push(o)
    }

    notifyObservers(observerName){
        for(let i = 0; i < this.observers.length; i++){
            let currentObserver = this.observers[i]
            if(currentObserver.name == observerName){
                currentObserver.update(this);
            }
        }

    }

    returnBook(bookName){
        if(!this.leased.includes(bookName.toLowerCase())){
            return "No such book is leased"
        }
        //get index of book 
        const bookIndex = this.leased.indexOf(bookName.toLowerCase());
        //delete the book from leased
        this.leased.splice(bookIndex, 1);
        //add book back to book array 
        this.books.push(bookName);

        this.notifyObservers('returned')
        //return the new array
        return this.books
    }

}

module.exports = {
    Book
}
