import React from 'react';

const Input = ({ type = 'text', ...props }) => {
  return (
    <input
      {...props}
      className='w-full bg-slate-300 transition duration-300 rounded  focus:outline-none focus:ring focus:ring-blue-600 border-blue-600 shadow-sm text-black'
      type={type}
    />
  );
};
export default Input;
