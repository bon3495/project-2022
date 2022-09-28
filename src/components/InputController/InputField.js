import React from 'react';
import clsx from 'clsx';

const InputField = React.forwardRef(
  (
    {
      label,
      name,
      className,
      inputClassName,
      inputElementClassName,
      value,
      labelClassName,
      onInputChange,
      errorMessage,
      isTextarea,
      errorsMsgClassName,
      notShowMessage,
      disabled,
      onBlurChange,
      prevIcon,
      classNamePrevIcon,
      formInput,
      type = 'text',
      autoComplete = 'off',
      ...rest
    },
    ref
  ) => (
    <div className={clsx('flex flex-col items-start', className)}>
      {label && (
        <label
          htmlFor={name}
          className={clsx('mb-[10px] font-normal', labelClassName, {
            'text-sm': !formInput,
            'text-base text-dark-1': formInput,
          })}
        >
          {label}
        </label>
      )}
      <div
        className={clsx('flex flex-col', inputClassName, {
          'w-full': formInput,
        })}
      >
        <div className="relative">
          {prevIcon && (
            <label
              className={clsx(
                'absolute top-1/2 -translate-y-1/2 left-[15px]',
                classNamePrevIcon
              )}
              htmlFor={name}
            >
              {prevIcon}
            </label>
          )}
          <input
            ref={ref}
            id={name}
            className={clsx(
              'flex items-center outline-none transition-all ease-in-out duration-200 hover:shadow-hoverSearch focus:shadow-hoverSearch',
              inputElementClassName,
              {
                'is-invalid': errorMessage,
                'h-input-height rounded-lg py-3 pr-[15px] pl-50 bg-input-bg':
                  !formInput,
                'px-5 py-4 rounded-[10px] border-[1px] border-solid border-form-input-border h-input-form text-base text-gray-2 w-full bg-transparent hover:border-green-1 focus:border-green-1':
                  formInput,
              }
            )}
            autoComplete={autoComplete}
            value={value}
            {...rest}
            onChange={event => onInputChange?.(event?.target?.value)}
            disabled={disabled}
            type={type}
          />
        </div>
        {errorMessage && (
          <span className="text-xs text-red mt-1 ml-2">{errorMessage}</span>
        )}
      </div>
    </div>
  )
);

export default InputField;
