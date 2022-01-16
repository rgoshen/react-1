import React from 'react';
import { StyledHeader } from './StyledHeader';

export const Header = () => {
  return (
    <StyledHeader>
      <h1 className='header-title'>Madlibz!</h1>
      <p className='header-text'> Mad libs story generator</p>
    </StyledHeader>
  );
};
