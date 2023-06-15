import React, { useState } from 'react';
import Button from '../components/Button';
import { useEffect } from 'react';

const BasicUseState = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div className={'w-full py-5 my-2'}>
      <h1 className={'text-center p-4'}>Basic useState</h1>
      <div className={'flex justify-center gap-5 py-2'}>
        <div className={'text-7xl'}>{count}</div>
        <div className='grid gap-3'>
          <Button onClick={handleClick}>+1</Button>
          <Button
            onClick={() => {
              handleClick();
              handleClick();
            }}>
            +2
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicUseState;
