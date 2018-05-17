import React from 'react';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  name:"ravi"
};

export const toggleTheme= () => {
  themes.light = {
    foreground: '#eeeeee',
    background: 'red',
  };
};

export const ThemeContext = React.createContext(
  themes.light, // default value
  toggleTheme, 
  themes.name
);