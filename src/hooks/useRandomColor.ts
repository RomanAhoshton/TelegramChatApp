import {useEffect, useState} from 'react';

export const useRandomColor = () => {
  const [randomColor, setRandomColor] = useState('');

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const colorValue = `#${red.toString(16)}${green.toString(
      16,
    )}${blue.toString(16)}`;

    return colorValue;
  };

  useEffect(() => {
    const color = getRandomColor();
    setRandomColor(color);
  }, []);

  return {randomColor};
};
