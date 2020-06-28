import { useState } from 'react';
import ProgressBar from 'components/progress-bar';
import Share from 'components/share';
import Close from 'components/close';
import Story from 'components/story';
import Controls from 'components/controls';
import styles from './styles.module.css';

const Stories = props => {
  const { stories = [] } = props;
  const [activeStory, setActiveStory] = useState(0);
  const storyCount = stories.length;
  const handleNext = () => {
    if (activeStory < storyCount - 1) setActiveStory(activeStory + 1);
  };
  const handlePrevious = () => {
    if (activeStory > 0) setActiveStory(activeStory - 1);
  };
  const handleKeyUp = event => {
    const { keyCode } = event;
    console.log('key up');
    if (keyCode === 37) handlePrevious();
    if (keyCode === 39) handleNext();
    // Exit on escape if (keyCode === 27)
  };
  if (stories.length === 0) return <p>Loading...</p>;
  return (
    <div className={styles.stories}>
      <ProgressBar activeStory={activeStory} storyCount={storyCount} />
      <Share story={stories[activeStory]} />
      <Close />
      <Story story={stories[activeStory]} key={stories[activeStory].url} />
      <Controls onPrevious={handlePrevious} onNext={handleNext} />
    </div>
  );
};

export default Stories;
