import { ReactNode } from 'react'

// Button variant
type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'small' | 'medium' | 'large'

interface CustomButtonProps {
    variant?: ButtonVariant
    size?: ButtonSize
    children: ReactNode
    onclick: () => void
    disabled?: boolean
    className?: string
}

// Styles for Variant and Sizes
const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-primaryColor text-white hover:red-500 w-full',
    secondary: 'bg-white text-slate-500 hover:red-500 w-full',
}

const sizeStyles: Record<ButtonSize, string> = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-4 text-4xl ',
}

const CustomButton: React.FC<CustomButtonProps> = ({
    size = 'medium',
    variant = 'primary',
    disabled = false,
    onclick,
    children,
}) => {
    const baseStyle = 'rounded-lg focus:outline-none font-sans'
    const variantStyle = variantStyles[variant]
    const sizeStyle = sizeStyles[size]
    const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : ''

    return (
        <button
            onClick={onclick}
            disabled={disabled}
            className={`${baseStyle} ${variantStyle} ${sizeStyle} ${disabledStyle} `}
        >
            {children}
        </button>
    )
}

export default CustomButton
