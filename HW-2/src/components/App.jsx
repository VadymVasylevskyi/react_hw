
import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";



const goods = [
  { id: 1, title: "Vacuum Cleaner"},
  { id: 2, title: "Grill"},
  { id: 3, title: "TV"}
];

const orders = [
  {orderId: 123, status: 'в пути'},
  {orderId: 321, status: 'оформлен'},
  {orderId: 213, status: 'доставлен'}
]


function App() {
  return (
    <div className="App">
      <Greeting name = "Edge" />
      <ShoppingList key ={goods.id} ShoppingArr = {goods} />
      <OrderStatus key = {orders.orderId} OrderArr = {orders} />
      
    </div>
  );
}

export default App;
