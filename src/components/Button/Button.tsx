type ButtonProps = {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const buttonSizesMap = {
  sm: 'h-[1.875rem] text-xs',
  md: 'h-10 text-sm px-md py-xxs',
  lg: 'h-[3.125rem] text-md px-xl py-xxs'
}

export const Button = ({
  children,
  size = 'md',
  fullWidth = false
}: ButtonProps) => {
  return (
    <button
      className={`${buttonSizesMap[size]} ${fullWidth && 'w-full'} 
      bg-gradient-to-t from-[#ff5f5f] via-[#f062c0] to-[#f062c0] text-white rounded p-xxs`}
    >
      {children}
    </button>
  )
}
