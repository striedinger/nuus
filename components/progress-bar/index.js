import styles from './styles.module.css';

const ProgressBar = props => {
  const { activeStory, storyCount } = props;
  return (
    <div className={styles['progress-bar']}>
      { [...Array(storyCount)].map((_, index) => {
        return <div className={`${styles.bar} ${index <= activeStory ? styles.seen : ''}`} key={index} />;
      }) }
    </div>
  );
};

export default ProgressBar;
