import { useRef } from 'react';

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}

const ShoppingListForm = ({ onAddItem }: ShoppingListFormProps): JSX.Element => {
  // set initial value of `null` because
  // form element doesn't exist at the beginning when the `useRef` hook runs
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = inputRef.current?.value;
    if (newProduct) onAddItem(newProduct);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Product Name" ref={inputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export { ShoppingListForm };
