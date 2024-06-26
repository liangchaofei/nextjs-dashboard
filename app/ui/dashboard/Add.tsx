'use client';
import React, { useState } from 'react';
import { Button, Input } from 'antd';

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
      <Input onChange={(e) => setValue(e.target.value)} />
      <Button onClick={handleClick}>添加</Button>
    </>
  );
};
export default Add;
