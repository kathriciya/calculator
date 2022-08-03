import React from 'react';
import Button from '../Button';
import ButtonWrap from '../ButtonWrap';
import CalculatorWrap from '../Calculator';
import Display from '../Display';
import s from './App.module.scss';

const buttons = [
  ['C', 0, '.', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['='],
];
const App = () => {
  return (
    <div className={s.container}>
      <CalculatorWrap>
        <Display />
        <ButtonWrap>
          {buttons.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                value={btn}
                onClick={() => console.log('click')}
              />
            );
          })}
        </ButtonWrap>
      </CalculatorWrap>
    </div>
  );
};
export default App;
