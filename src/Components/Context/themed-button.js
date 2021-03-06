import React, { Component } from 'react';
import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme, name}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background, color:theme.foreground}}>
          {name}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;