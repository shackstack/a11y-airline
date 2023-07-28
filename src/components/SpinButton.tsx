import './SpinButton.css';
import Counter from './Counter';

type Label = string[];
const labels: Label = ['성인', '소아', '유아'];

const SpinButton: React.FC = () => {
  return (
    <section className='spinButtonContainer'>
      <header>
        <h1>승객 선택</h1>
      </header>
      <div>
        {labels.map((label) => {
          if (label === '성인') return <Counter label={label} minimum={1} />;
          return <Counter label={label} minimum={0} />;
        })}
      </div>
    </section>
  );
};

export default SpinButton;
