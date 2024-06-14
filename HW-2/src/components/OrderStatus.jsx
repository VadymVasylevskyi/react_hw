function OrderStatus(props) {
    const OrderArr = props.OrderArr;

    if (OrderArr.length === 0) {
      return <p>Список пуст...</p>;
    }
    return (
      <div>
        {OrderArr.map((m) => {
          return <ul>
            <li>Заказ№{m.orderId}, {m.status}</li>
          </ul>;
        })}
      </div>
    );
}

export default OrderStatus;
