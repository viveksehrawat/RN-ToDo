import {useState} from 'react';

export const useFormData = initialValues => {
  const [formValues, setFormValues] = useState({
    ...initialValues,
  });

  const handleFormValueChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  return [formValues, handleFormValueChange, setFormValues];
};
