class LeasedObserver{
    constructor(){
        this.leased = []
    }

    update(model){
        const recentlyLeased = model.leased[model.leased.length - 1]
        this.leased.push(recentlyLeased);
        console.log(`In ascending order, these are the recently leased books: ${this.leased.toString()}`);
            
       
    }
}

module.exports = {
    LeasedObserver
}