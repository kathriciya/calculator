import React from 'react';
import s from './style.module.scss';

const Button = ({ value, onClick }) => {
  const isEquals = value === '=';
  const clazz = isEquals ? `${s.equals}` : `${s.primary}`;
  return (
    <button className={`${s.button} ${clazz}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
