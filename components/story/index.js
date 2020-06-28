import styles from './styles.module.css';

const Story = props => {
  const { story: { abstract, multimedia, title, url } = {} } = props;
  const media = multimedia[0] || {};
  const handleMoreClick = () => {
    // Log see more click
  };
  return (
    <div className={styles.story}>
      <div className={styles.media}>
        <img src={media.url} alt={media.caption} />
      </div>
      <div className={styles.overlay}>
        <div className={styles.meta}>
          <h1>{title}</h1>
          <p>{abstract}</p>
        </div>
        <div className={styles.more}>
          <a className={styles['more-link']} target="_blank" rel="noopener noreferrer" href={url} onClick={handleMoreClick}>
            <span className={styles['more-icon']}>⌃</span>
            <span className={styles['more-text']}>See more</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Story;
