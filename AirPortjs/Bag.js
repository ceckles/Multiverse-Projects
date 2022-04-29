class Bag {
    constructor(id, weight){
        this.id = id;
        if(!weight){
            throw new Error('bag must have a weight')
        }
        this.weight = weight;
    }
    getWeight(){
        return this.weight;
    }
}
module.exports = Bag;