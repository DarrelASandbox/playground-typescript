import { useState } from 'react';
import { ShoppingList } from './components/ShoppingList';
import { Item } from './models/items';
import { ShoppingListForm } from './components/ShoppingListForm';
import { v4 as uuid } from 'uuid';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) =>
    setItems([...items, { id: uuid(), product, quantity }]);

  return (
    <>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </>
  );
}

export default App;
