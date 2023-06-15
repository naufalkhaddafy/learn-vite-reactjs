import clsx from 'clsx';
import React from 'react';

const Button = (props) => {
  const { className = '', text, children } = props;
  return (
    <button
      {...props}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 whitespace-nowrap inline-flex justify-center items-center gap-x-2 bg-blue-900 hover:bg-blue-800 text-white px-4 h-10 rounded font-medium'
      )}>
      {text || children}
    </button>
  );
};

export default Button;
