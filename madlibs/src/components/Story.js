import React, { Fragment } from 'react';
import { StyledStory } from './StyledStory';

export const Story = (props) => {
  const { title, story, userInput, newStory } = props;

  let fullStory = story.map((text, index) => {
    if (text !== 0) {
      return (
        <Fragment key={index}>
          {`${text}`}
          <span className='user-input'> {userInput[index]}</span>
        </Fragment>
      );
    }
  });

  return (
    <StyledStory>
      <button className='new-story' onClick={newStory}>
        Make another story
      </button>
      <h2 className='story-title'>{title}</h2>
      <p className='story-text'>{fullStory ? fullStory : story}</p>
    </StyledStory>
  );
};
