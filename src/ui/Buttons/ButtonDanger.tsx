import React from 'react';
import './ButtonDanger.css';

export type ButtonDangerSize = 'small' | 'medium';

export interface ButtonDangerProps {
  children: React.ReactNode;
  size?: ButtonDangerSize;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const ButtonDanger: React.FC<ButtonDangerProps> = ({
  children,
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseClassName = `sds-button-danger sds-button-danger-${size}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonDanger;
