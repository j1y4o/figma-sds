import React from 'react';
import './IconButton.css';

export type IconButtonVariant = 'primary' | 'neutral' | 'subtle';
export type IconButtonSize = 'small' | 'medium';

export interface IconButtonProps {
  children: React.ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel: string; // 아이콘 버튼은 접근성을 위해 aria-label이 필수
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
  ...props
}) => {
  const baseClassName = `sds-icon-button sds-icon-button-${variant} sds-icon-button-${size}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
