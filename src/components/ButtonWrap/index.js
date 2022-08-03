import React from 'react';
import s from './style.module.scss';

const ButtonWrap = ({ children }) => {
  return <div className={s.button_wrap}>{children}</div>;
};

export default ButtonWrap;
