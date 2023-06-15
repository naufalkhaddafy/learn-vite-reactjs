import React from 'react';

const Card = ({ children }) => {
  return <div className={'shadow bg-slate-700 rounded-lg overflow-hidden'}>{children}</div>;
};

function Title({ children }) {
  return <div className={'text-2xl p-3 border-b border-slate-500 font-mono'}>{children}</div>;
}
function Body({ children }) {
  return <div className={'p-3'}>{children}</div>;
}
function Footer({ children }) {
  return <div className={'bg-slate-800 p-3'}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
