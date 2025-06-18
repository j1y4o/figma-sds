import React from 'react';
import './ButtonGroup.css';

export type ButtonGroupAlign = 'start' | 'center' | 'end' | 'stack';
export type ButtonGroupGap = 'small' | 'medium';

export interface ButtonGroupProps {
  children: React.ReactNode;
  align?: ButtonGroupAlign;
  gap?: ButtonGroupGap;
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  align = 'start',
  gap = 'small',
  className,
  ...props
}) => {
  const baseClassName = `sds-button-group sds-button-group-${align} sds-button-group-gap-${gap}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;
  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

export default ButtonGroup;
