import { useState } from 'react';
import { ShoppingList } from './components/ShoppingList';
import { Item } from './models/items';
import { ShoppingListForm } from './components/ShoppingListForm';

function App() {
  // const items = [
  //   { id: 1, product: 'Lemon', quantity: 3 },
  //   { id: 2, product: 'Chicken Breast', quantity: 3 },
  // ];

  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string) => {
    console.log(product);
  };

  return (
    <>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </>
  );
}

export default App;
