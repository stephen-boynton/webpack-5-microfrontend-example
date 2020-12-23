import { mount as productMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

const productList = document.querySelector('#product-list');
productMount(productList)

const cartArea = document.querySelector('#cart-area')
cartMount(cartArea)

console.log('container!')