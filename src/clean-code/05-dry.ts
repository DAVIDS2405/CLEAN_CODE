type Size = 'x' | 'xl' | 's' | '';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {

                case 'string':
                    if(this[key].length <=0) throw  Error(`${key} is empty`);
                break;

                case 'number':
                    if(this[key] <= 0) throw Error(`${key} is zero`);
                break;  

                default:
                    throw Error(`${key} is not valid`);

            }
        }
        return true;
    }
    toString(){

        if (!this.isProductReady) return;
        
        return ` ${this.name} (${this.size}) , ${this.price}`;
    }
}

(() =>{
    const bluePants = new Product('blue pants');
    
})();