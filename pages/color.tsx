import Circle from '@uiw/react-color-circle';
import React from 'react';

interface ColorPageProps {
  hex: string;
  setHex: (arg0: string) => void;
}

export const ColorPage: React.FC<ColorPageProps> = ({ hex, setHex }) => {
  return (
    <>
      <h1
        className={`mb-10 font-bold ${
          hex === '#FFFFFF' ? 'text-black' : 'text-white'
        }`}
      >
        SELECT YOUR FAVORITE COLOR
      </h1>
      <Circle
        colors={[
          '#F44336',
          '#e91e63',
          '#9c27b0',
          '#673AB7',
          '#3F51B5',
          '#2196F3',
          '#03a9f4',
          '#00bcd4',
          '#009688',
          '#4caf50',
          '#8bc34a',
          '#CDDC39',
          '#FFEB3B',
          '#FFC107',
          '#FF9800',
          '#FF5722',
          '#795548',
          '#607D8B',
        ]}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
        className="w-64 flex justify-center"
      />
    </>
  );
};
