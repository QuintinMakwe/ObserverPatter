const chalk = require('chalk')


class LeasedObserver{
    constructor(name){
        this.name = name
        this.leased = []
    }

    update(model){
        const recentlyLeased = model.leased[model.leased.length - 1]
        this.leased.push(recentlyLeased);
        console.log(chalk.blue(`In ascending order, these are the recently leased books: ${this.leased.toString()}`));
            
       
    }
}

module.exports = {
    LeasedObserver
}