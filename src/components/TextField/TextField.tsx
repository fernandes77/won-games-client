import { useState } from 'react'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  labelFor = '',
  initialValue = '',
  error,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  const cssIconPosition = { left: 'order-none', right: 'order-1' }
  const cssIconPositionInput = { left: 'pl-xs', right: 'pr-xs' }

  const cssDisabled = 'cursor-not-allowed text-gray placeholder:text-current'

  return (
    <div>
      {!!label && (
        <label
          htmlFor={labelFor}
          className={`${disabled ? cssDisabled : ''}
          ${error ? 'text-red' : ''}
          text-sm text-black cursor-pointer
          `}
        >
          {label}
        </label>
      )}
      <div
        className={`${error ? 'border-red' : ''}
        flex bg-gray-light rounded-sm px-xs border-2 border-solid border-gray-light
        focus-within:shadow-[0_0_0.5rem] focus-within:shadow-primary`}
      >
        {!!icon && (
          <div
            className={`${cssIconPosition[iconPosition]}
            ${disabled ? cssDisabled : ''}
            ${error ? 'text-red' : ''}
            flex items-center w-[1.375rem] text-gray [&>svg]:w-full`}
          >
            {icon}
          </div>
        )}
        <input
          className={`${cssIconPositionInput[iconPosition]}
          ${disabled ? cssDisabled : ''}
           text-black font-poppins text-base py-xxs bg-transparent border-0 outline-none w-full`}
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      </div>
      {!!error && <p className="text-red text-xs">{error}</p>}
    </div>
  )
}
