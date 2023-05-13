import { useState } from 'react';

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

const ShoppingListForm = ({ onAddItem }: ShoppingListFormProps): JSX.Element => {
  const [inputProduct, setInputProduct] = useState('');
  const [inputQuantity, setInputQuantity] = useState('1');

  const changeProductHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputProduct(e.target.value);

  const changeQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputQuantity(e.target.value);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onAddItem(inputProduct, +inputQuantity);
    setInputProduct('');
    setInputQuantity('1');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Product Name"
        value={inputProduct}
        onChange={changeProductHandler}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={inputQuantity}
        onChange={changeQuantityHandler}
        min={0}
        max={99}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export { ShoppingListForm };
