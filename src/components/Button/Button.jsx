import clsx from 'clsx'

// Centralized configuration for button variants
const variantMap = {
  small: 'py-0 px-1 text-sm rounded-sm',
  medium: 'py-0.5 px-2 text-base rounded-sm',
  large: 'py-2 px-4 text-lg rounded-md',
  primary:
    'bg-blue-900 text-white border border-blue-900 hover:bg-blue-600 active:bg-blue-400',
  secondary:
    'bg-blue-100 text-black border border-blue-200 hover:bg-blue-300 active:bg-blue-400',
  tertiary:
    'bg-transparent text-blue-900 border border-transparent hover:bg-blue-50 active:bg-blue-100',
  success:
    'bg-green-500 text-white border border-green-500 hover:bg-green-600 active:bg-green-400',
  warning:
    'bg-yellow-500 text-white border border-yellow-500 hover:bg-yellow-600 active:bg-yellow-400',
  danger:
    'bg-red-500 text-white border border-red-500 hover:bg-red-600 active:bg-red-400',
  info: 'bg-blue-400 text-white border border-blue-400 hover:bg-blue-600 active:bg-blue-400',
  disabled: 'opacity-50 cursor-not-allowed',
  enabled: 'hover:opacity-90',
}

function Button({
  children,
  small,
  large,
  secondary,
  tertiary,
  success,
  warning,
  danger,
  info,
  disabled = false,
  icon: Icon,
  className,
  onClick,
}) {
  // Determine the size class with a clear default
  const buttonClasses = clsx({
    [variantMap.small]: small,
    [variantMap.medium]: !small && !large, // Default to medium
    [variantMap.large]: large,
    [variantMap.primary]: !secondary && !tertiary, // Default to primary
    [variantMap.secondary]: secondary,
    [variantMap.tertiary]: tertiary,
    [variantMap.success]: success,
    [variantMap.warning]: warning,
    [variantMap.danger]: danger,
    [variantMap.info]: info,
    [variantMap.disabled]: disabled,
    [variantMap.enabled]: !disabled,
  })

  // Base classes for all buttons
  const baseClasses =
    'w-fit inline-flex items-center justify-center font-medium focus:outline-none transition'

  return (
    <button
      className={clsx(baseClasses, buttonClasses, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2 w-5 h-5" />}
      {children}
    </button>
  )
}

export default Button
