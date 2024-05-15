'use client';
import React, { useState } from 'react';

interface IProps {
  handleAdd: (value: string) => void;
}

const Add = (props: IProps) => {
  const { handleAdd } = props;
  const [value, setValue] = useState('');
  const handleClick = () => {
    handleAdd && handleAdd(value);
  };
  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>添加</button>
    </>
  );
};
export default Add;
