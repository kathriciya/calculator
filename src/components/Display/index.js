import React from 'react';
import s from './style.module.scss';

const Display = ({ value }) => {
  return (
    <div className={s.display}>
      <span className={s.result}>{value}</span>
    </div>
  );
};

export default Display;
