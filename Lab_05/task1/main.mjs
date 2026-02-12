import { Product, Cart } from "./core.mjs";
import * as Utils from "./utils.mjs"
import {taxRate} from "./config.mjs"

const cart = new Cart()
const p1 = new Product(1, "Widget", 10)

cart.addItem(p1, 2)

const total = cart.getSubTotal() * (1 + taxRate)
console.log(`total: ${Utils.formatPrice(total)}`)