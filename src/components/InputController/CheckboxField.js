import clsx from 'clsx';
import React from 'react';

const CheckboxField = React.forwardRef(
  (
    {
      label,
      name,
      formInput,
      className,
      labelClassName,
      inputElementClassName,
      orderInput,
      orderLabel,
      errorMessage,
      checked,
      onInputChange,
      disabled,
      type = 'checkbox',
      ...rest
    },
    ref
  ) => {
    return (
      <div className={clsx('flex items-center gap-x-3', className)}>
        {label && (
          <label
            htmlFor={name}
            className={clsx(
              'font-normal  text-sm sm:text-base text-gray-3',
              labelClassName,
              {
                'text-sm': !formInput,
                ' text-sm sm:text-base text-dark-1': formInput,
              }
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          className={clsx('', inputElementClassName)}
          autoComplete="off"
          checked={checked}
          {...rest}
          onChange={event => onInputChange?.(event?.target?.checked)}
          disabled={disabled}
          type={type}
        />
      </div>
    );
  }
);

export default CheckboxField;
