import { useState } from 'react';

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}

const ShoppingListForm = ({ onAddItem }: ShoppingListFormProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onAddItem(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Product Name"
        value={inputValue}
        onChange={changeHandler}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export { ShoppingListForm };
