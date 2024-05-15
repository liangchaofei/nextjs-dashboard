'use client';
import React from 'react';
import { Button } from 'antd';

interface IProps {
  handleDelete: (invoice: any) => void;
  invoice: any;
}

const Add = (props: IProps) => {
  const { handleDelete, invoice } = props;
  const handleClick = () => {
    console.log('aa');
    handleDelete && handleDelete(invoice);
  };
  return (
    <>
      <Button onClick={handleClick}>删除</Button>
    </>
  );
};
export default Add;
