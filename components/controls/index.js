import styles from './styles.module.css';

const Controls = props => {
  const { onNext, onPrevious } = props;
  const handleNext = event => {
    event.preventDefault();
    if (onNext) onNext();
  };
  const handlePrevious = event => {
    event.preventDefault();
    if (onPrevious) onPrevious();
  };
  return (
    <div className={styles.controls}>
      <div className={styles.previous} onMouseUp={handlePrevious} />
      <div className={styles.next} onMouseUp={handleNext} />
    </div>
  );
};

export default Controls;
