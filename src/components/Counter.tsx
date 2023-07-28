import { useState, MouseEvent } from 'react';

const Counter = ({ label, minimum }: { label: string; minimum: number }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [count, setCount] = useState<number>(minimum);
  const [message, setMessage] = useState<string>('');

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  const increment = (label: string) => {
    if (count < 3) {
      setCount((prevCount) => {
        setMessage(`${label} 승객 추가 ${prevCount + 1}`);
        return prevCount + 1;
      });
    }
  };

  const decrement = (label: string) => {
    if (count > 1) {
      setCount((prevCount) => {
        setMessage(`${label} 승객 감소 ${prevCount - 1}`);
        return prevCount - 1;
      });
    }
  };

  return (
    <>
      <div className='spinButtonLabel'>
        <label>{label}</label>
        <div
          className='helpIcon'
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}>
          ?
          {isTooltipVisible && (
            <span className='tooltip'>최대 인원수는 3명까지 가능합니다</span>
          )}
        </div>
      </div>

      <button
        onClick={() => decrement(label)}
        className='spinButton'
        aria-label={`${label} 탑승자 한명 줄이기`}
        disabled={count === 1}>
        -
      </button>
      <input
        type='text'
        role='spinbutton'
        aria-valuemin={0}
        aria-valuemax={3}
        aria-valuenow={count}
        readOnly
        className='spinButtonInput'
        value={`${label} ${count}`}
      />
      <button
        onClick={() => increment(label)}
        className='spinButton'
        aria-label={`${label} 탑승자 한명 늘리기`}
        disabled={count === 3}>
        +
      </button>
      <div aria-live='polite' className='visually-hidden'>
        {message}
      </div>
    </>
  );
};

export default Counter;
