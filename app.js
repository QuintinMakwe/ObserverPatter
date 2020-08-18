var inquirer = require('inquirer');
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
const question = async () => {
        let leaveLoop = false
        inquirer.prompt([
            {
                type: 'String',
                name: "Question",
                message: "Enter 1 to add a book \n 2 to see all books \n 3 to delete books \n 4 to lend books \n 5 to return a borrowed books \n \"quit\" to quit the application",
        }
        ])
        .then(answers => 
            {
                // console.log(answers)
                if(answers.Question == 'quit'){
                    leaveLoop = true
                }else if(answers.Question == '1'){
                    inquirer.prompt([
                        {
                            type: 'String',
                            name: "SubQuestion",
                            message: "Enter title of book",
                    }
                    ]).then(book => {
                        console.log(book1.addBook(book[Object.keys(book)[0]]))
                    }).then(()=>{
                        return question()
                    })
                }else if(answers.Question == '2'){
                    inquirer.prompt([
                        {
                            type: 'String',
                            name: "Sub-Question",
                            message: "Click your enter key to continue",
                    }
                    ]).then(book => {
                        console.log(book1.getAllBooks())
                    }).then(()=>{
                        return question()
                    })}else if(answers.Question == '3'){
                        inquirer.prompt([
                            {
                                type: 'String',
                                name: "Sub-Question",
                                message: "Enter title of book to delete",
                        }
                        ]).then(book => {
                            console.log(book1.deleteBook(book[Object.keys(book)[0]]))
                        }).then(()=>{
                            return question()
                        })}else if(answers.Question == '4'){
                    inquirer.prompt([
                        {
                            type: 'String',
                            name: "Sub-Question",
                            message: "Enter title of book to lend",
                    }
                    ]).then(book => {
                        console.log(book1.lendBook(book[Object.keys(book)[0]]))
                    }).then(()=>{
                        return question()
                    })}else if(answers.Question == '5'){
                        inquirer.prompt([
                            {
                                type: 'String',
                                name: "Sub-Question",
                                message: "Enter title of book",
                        }
                        ]).then(book => {
                            console.log(book1.returnBook(book[Object.keys(book)[0]]));
                        }).then(()=>{
                            return question()
                        })}else if(!leaveLoop){
                    return question()
                }
            })
        .catch(err => 
            {console.log(`An error occurred: ${err.message}`)})
}

question();
