module.exports = (temp,product) =>{
    let output = temp.replace(/{%Prod_name%}/g,product.productName);
    output = output.replace(/{%Image%}/g,product.image);
    output = output.replace(/{%Price%}/g,product.price);
    output = output.replace(/{%Quantity%}/g,product.quantity);
    output = output.replace(/{%Country%}/g,product.from);
    output = output.replace(/{%Nutrients%}/g,product.nutrients);
    output = output.replace(/{%Description%}/g,product.description);
    output = output.replace(/{%ID%}/g,product.id);
    if(!product.organic) output = output.replace(/{%Not_organic%}/g,'not-organic');
    return output;
}