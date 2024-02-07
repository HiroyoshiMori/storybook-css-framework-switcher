import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary is-primary btn-primary'
    : 'storybook-button--secondary is-secondary btn-secondary';
  let alternativeSize;
  switch (size) {
    case 'small': alternativeSize = 'xs'; break;
    case 'medium': alternativeSize = 'lg'; break;
    case 'large': alternativeSize = 'xl'; break;
    default: alternativeSize = 'sm';
  }
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size} button is-${size} btn--${alternativeSize}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
