import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { FORM_NAMES } from '~/constants/common-values';
import CheckboxField from './CheckboxField';
import InputField from './InputField';

const InputController = ({
  name,
  control,
  extendOnChange,
  handleFocus,
  typeInput,
  ...restInput
}) => {
  useEffect(() => {
    handleFocus?.(name);
  }, [handleFocus, name]);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        let Field = null;
        switch (typeInput) {
          case FORM_NAMES.checkbox:
            Field = CheckboxField;
            break;

          default:
            Field = InputField;
            break;
        }

        return (
          <Field
            {...field}
            {...restInput}
            onInputChange={e => {
              field.onChange(e);
              extendOnChange?.(e);
            }}
            errorMessage={error?.message}
          />
        );
      }}
    />
  );
};

export default InputController;
