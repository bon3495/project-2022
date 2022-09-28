import clsx from 'clsx';
import React from 'react';

const Button = ({
  onlyIcon,
  iconButton,
  children,
  content,
  onClick,
  className,
  iconClassName,
  contentClassName,
}) => {
  if (onlyIcon)
    return (
      <button
        onClick={onClick}
        className={clsx('flex items-center', className)}
      >
        {onlyIcon}
      </button>
    );

  return (
    <button onClick={onClick} className={clsx('flex items-center', className)}>
      {iconButton && <span className={iconClassName}>{iconButton}</span>}
      {children ? (
        children
      ) : (
        <span className={contentClassName}>{content}</span>
      )}
    </button>
  );
};

export default Button;
