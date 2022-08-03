import React from 'react';
import s from './style.module.scss';

const CalculatorWrap = ({ children }) => {
  return <div className={s.wrap}>{children}</div>;
};

export default CalculatorWrap;
