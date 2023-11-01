import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
// import { IndividualCustomer } from './classes/customer';
// import { TenPercentDiscount } from './classes/discount';
// import { NoDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new noDiscount();

// agora os descontos são passados na instância do ShoppingCart
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Vinicius',
//   'Santana',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '2222222222222');

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
); // injeção de dependência

shoppingCart.addItem(new Product('Camisata', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.7));
// shoppingCart.clear();

// console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
