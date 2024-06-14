function ShoppingList(props) {
    const ShoppingArr = props.ShoppingArr;

    if (ShoppingArr.length === 0) {
      return <p>Список пуст...</p>;
    }
    return (
      <div>
        {ShoppingArr.map((m) => {
          return <ul>
            <li>{m.title}</li>
          </ul>;
        })}
      </div>
    );
}

export default ShoppingList