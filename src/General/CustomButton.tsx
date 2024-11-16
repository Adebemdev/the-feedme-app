import { ReactElement, ReactNode } from 'react'

// Button variant
type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonSize = 'small' | 'medium' | 'large'

interface CustomButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  label?: string
  children?: ReactNode
  onClick: (e: React.FormEvent) => void
  disabled?: boolean
  className?: string
}

// Styles for Variant and Sizes
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primaryColor font-bold  text-white hover:red-500 w-full',
  secondary: 'bg-white text-slate-500 hover:red-500 w-full',
  tertiary:
    'bg-white text-primaryColor font-bold hover:red-500 w-full border-[2px]  border-primaryColor',
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-6 text-4xl ',
}

const CustomButton: React.FC<CustomButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
  label,
  children,
}) => {
  const baseStyle = 'rounded-2xl focus:outline-none font-sans capitalize'
  const variantStyle = variantStyles[variant]
  const sizeStyle = sizeStyles[size]
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${disabledStyle} `}
    >
      {label || children}
    </button>
  )
}

export default CustomButton
