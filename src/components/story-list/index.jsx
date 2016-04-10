import React, { Component } from 'react';

import Story from '../story';
import styles from './styles.css';

export default class StoryList extends Component {

  componentDidMount() {
    const rootEl = document.getElementById('root');
    rootEl.onscroll = () => {
      if (rootEl.scrollTop + rootEl.offsetHeight >= rootEl.scrollHeight) {
        this.props.onScrollToEnd();
      }
    };
  }

  render() {
    const { stories, handleClick } = this.props;
    return (
      <ol className={styles.storyList}>
        {stories.map(story => <Story story={story} onClick={handleClick(story)} key={story.id} />)}
      </ol>
    );
  }
}
