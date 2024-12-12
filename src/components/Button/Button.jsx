import clsx from 'clsx'

// Centralized configuration for button variants
const variantMap = {
  size: {
    small: 'w-fit py-0 px-1 text-sm rounded-sm',
    medium: 'w-fit py-0.5 px-2 text-base rounded-sm',
    large: 'w-fit py-2 px-4 text-lg rounded-md',
  },
  priority: {
    primary:
      'bg-blue-900 text-white border border-blue-900 hover:bg-blue-600 active:bg-blue-400',
    secondary:
      'bg-blue-100 text-black border border-blue-200 hover:bg-blue-300 active:bg-blue-400',
    tertiary:
      'bg-transparent text-blue-900 border border-transparent hover:bg-blue-50 active:bg-blue-100',
  },
  contextual: {
    success:
      'bg-green-500 text-white border border-green-500 hover:bg-green-600 active:bg-green-400',
    warning:
      'bg-yellow-500 text-white border border-yellow-500 hover:bg-yellow-600 active:bg-yellow-400',
    danger:
      'bg-red-500 text-white border border-red-500 hover:bg-red-600 active:bg-red-400',

    info: 'bg-blue-400 text-white border border-blue-400 hover:bg-blue-600 active:bg-blue-400',
  },
  state: {
    disabled: 'opacity-50 cursor-not-allowed',
    enabled: 'hover:opacity-90',
  },
}

function Button({
  children,
  small,
  // eslint-disable-next-line no-unused-vars
  medium,
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
  // ...props
}) {
  // Determine the size class with a clear default
  const sizeClass = clsx({
    [variantMap.size.small]: small,
    [variantMap.size.medium]: !small && !large, // Default to medium
    [variantMap.size.large]: large,
  })

  // Determine the priority class
  const priorityClass = clsx({
    [variantMap.priority.primary]: !secondary && !tertiary, // Default to primary
    [variantMap.priority.secondary]: secondary,
    [variantMap.priority.tertiary]: tertiary,
  })

  // Determine the contextual class
  const contextualClass = clsx({
    [variantMap.contextual.success]: success,
    [variantMap.contextual.warning]: warning,
    [variantMap.contextual.danger]: danger,
    [variantMap.contextual.info]: info,
  })

  // Determine the state class
  const stateClass = variantMap.state[disabled ? 'disabled' : 'enabled']

  // Base classes for all buttons
  const baseClasses = //eslint-disable-line
    'inline-flex items-center justify-center font-medium focus:outline-none transition'

  return (
    <button
      className={clsx(
        baseClasses,
        sizeClass,
        priorityClass,
        contextualClass,
        stateClass,
        className,
      )}
      disabled={disabled}
    >
      {Icon && <Icon className="mr-2 w-5 h-5" />}
      {children}
    </button>
  )
}

export default Button
