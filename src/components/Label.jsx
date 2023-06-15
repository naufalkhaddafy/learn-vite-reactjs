import React from 'react';

const Label = ({ children, value, ...props }) => {
  return (
    <label {...props} className='text-slate-300 mb-1 block'>
      {value || children}
    </label>
  );
};
export default Label;
