import React, {useCallback, useState} from 'react';

const useToggle = (initialValue = false) => {
  const [isToggled, setIsToggled] = useState(initialValue);

  const toggle = useCallback(() => setIsToggled(!isToggled), []);
  const setIsToggledOn = useCallback(() => setIsToggled(true), []);
  const setIsToggledOff = useCallback(() => setIsToggled(false), []);

  return {isToggled, toggle, setIsToggledOn, setIsToggledOff};
};

export default useToggle;
