// const product = {
//     itemName: 'flower',
//     price: 50,
//     discount: 20,
//     itemCode: 'F-40',
// }

function createProduct(name, price, discount, itemCode) {
    return {
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode,
    }
}

const football = createProduct('football', 500, 15, 'F-20');
console.log(football);


function Product(name, price, discount, itemCode){
    this.itemName =name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;
    this.discountValue =function(){
        return price*discount/100;
    }
}

const mobile = new Product('iphone',81000,1,'I-10');

console.log(mobile);