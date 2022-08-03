import React, { useState } from 'react';
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
  let [calc, setCalc] = useState({
    opr: '',
    num: 0,
    res: 0,
  });

  const handleClickNum = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.num.toString().length < 8) {
      setCalc({
        ...calc,
        num: calc.num === 0 && value === '0' ? '0' : Number(calc.num + value),
        res: !calc.opr ? 0 : calc.res,
      });
    }
  };

  const handleClickComma = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  const handleClickOperator = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      opr: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const handleClickEquals = () => {
    if (calc.opr && calc.num) {
      const math = (a, b, opr) =>
        opr === '+' ? a + b : opr === '-' ? a - b : opr === 'x' ? a * b : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === '0' && calc.opr === '/'
            ? 'Error'
            : +math(calc.res, calc.num, calc.opr).toPrecision(7),
        opr: '',
        num: 0,
      });
    }
  };

  const handleClickReset = () => {
    setCalc({
      ...calc,
      opr: '',
      num: 0,
      res: 0,
    });
  };

  return (
    <div className={s.container}>
      <CalculatorWrap>
        <Display value={calc.num ? calc.num : calc.res} />
        <ButtonWrap>
          {buttons.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                value={btn}
                onClick={
                  btn === '/' || btn === 'x' || btn === '-' || btn === '+'
                    ? handleClickOperator
                    : btn === '='
                    ? handleClickEquals
                    : btn === 'C'
                    ? handleClickReset
                    : btn === '.'
                    ? handleClickComma
                    : handleClickNum
                }
              />
            );
          })}
        </ButtonWrap>
      </CalculatorWrap>
    </div>
  );
};
export default App;
