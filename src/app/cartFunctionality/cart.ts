
import { Product } from "../../../types/product"

export const addcart = (pro: Product) =>{
    const cart : Product[] =JSON.parse(localStorage.getItem('cart')|| '[]')

    const preproIndex = cart.findIndex(item => item._id === pro._id)
    if(preproIndex > -1){
        cart[preproIndex].inventory += 1
    } 
    else{
cart.push({
    ...pro,inventory:1
})
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}
 export const removefrmcart = (proId : string ) =>{
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== proId)

    localStorage.setItem('cart' , JSON.stringify(cart))
 }
  export const updatecart = (productid : string ,quantity: number ) =>{
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productindex = cart.findIndex(item => item._id === productid)
    if(productindex > -1 ){
        cart[productindex].inventory = quantity
    }
  }

  export const getItem =() : Product[] =>{
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }