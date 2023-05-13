import { useState } from 'react';
import { ShoppingList } from './components/ShoppingList';
import { Item } from './models/items';
import { ShoppingListForm } from './components/ShoppingListForm';
import { v4 as uuid } from 'uuid';

function App() {
  // const items = [
  //   { id: 1, product: 'Lemon', quantity: 3 },
  //   { id: 2, product: 'Chicken Breast', quantity: 3 },
  // ];

  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string) =>
    setItems([...items, { id: uuid(), product, quantity: 1 }]);

  return (
    <>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </>
  );
}

export default App;
