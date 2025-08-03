import React from 'react';
import { useContext } from 'react';
import { MyAppContext } from '../MainApp';

export const HookContextChild = () => {
  return (
    <div id="c_child">
      <HookContextGrand/>
    </div>
  );
};

export const HookContextGrand = () => {
  const {title, lang} = useContext(MyAppContext);
  return (
    <div id="c_dhild_grand">
      {title}{lang}
    </div>
  );
};
