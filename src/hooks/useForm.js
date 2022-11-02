import React, {useCallback, useMemo, useState} from 'react';

const initFormState = initialValues =>
  Object.keys(initialValues).reduce((memo, key) => {
    memo[key] = {
      isValid: true,
      ...initialValues[key],
    };

    return memo;
  }, {});

const useForm = initialValues => {
  const [values, setValues] = useState(initFormState(initialValues));

  const handleValueChange = useCallback((text, name) => {
    setValues(currentValues => {
      const currentValue = currentValues[name];

      return {
        ...currentValues,
        [name]: {
          ...currentValue,
          value: text,
          isValid: currentValue.validators ? currentValue.validators.every(validator => validator(text)) : true,
        },
      };
    });
  }, []);

  const getFormData = () =>
    Object.keys(values).reduce((memo, key) => {
      memo[key] = values[key].value;

      return memo;
    }, {});

  const isFormEmpty = useMemo(() => !Object.values(values).every(({value}) => !!value), [values]);
  const isFormValid = useMemo(() => Object.values(values).every(({isValid}) => isValid), [values]);

  return {values, handleValueChange, getFormData, isFormEmpty, isFormValid};
};

export default useForm;
