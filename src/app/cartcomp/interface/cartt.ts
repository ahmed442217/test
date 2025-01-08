
export interface Cart {
    numOfCartItems:number,
    status:string,
    date:Date,
}
interface Date {
    totalCartPrice:number,
    products:Product[]
}
interface Product{
    count:number,
    price:number,
    product:innerproduct,
}
interface innerproduct{
imageCover:string,
title:string,
category:category,
}

interface category{
name:string
}