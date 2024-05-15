'use client';
import React, { useState } from 'react';
import { Button, Input } from 'antd';

interface IProps {
  handleSearch: (value: string) => void;
}

const Add = (props: IProps) => {
  const { handleSearch } = props;
  const [value, setValue] = useState('');
  const handleClick = () => {
    handleSearch && handleSearch(value);
  };
  return (
    <>
      <Input onChange={(e) => setValue(e.target.value)} />
      <Button onClick={handleClick}>查询</Button>
    </>
  );
};
export default Add;
