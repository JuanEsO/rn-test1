import React, {createContex, useState} from 'react';

export const ColorContext = React.createContext(null);

export const ColorProvider = ({children}) => {
  const [color, setColor] = useState('black');

  return (
    <ColorContext.Provider value={{color, setColor}}>
      {children}
    </ColorContext.Provider>
  );
};
