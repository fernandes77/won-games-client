'use client'

type RadioValue = string | ReadonlyArray<string> | number

type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  value?: RadioValue
} & React.InputHTMLAttributes<HTMLInputElement>

export const Radio = ({
  label,
  onCheck,
  labelColor = 'white',
  labelFor = '',
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  const labelColorClass = { white: 'text-white', black: 'text-black' }

  return (
    <div className="flex items-center">
      <input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        className="flex items-center justify-center appearance-none w-[1.125rem] h-[1.125rem]
          border-2 border-solid border-primary rounded-full bg-transparent outline-none
          transition-[background_0.1s_ease-in-out] cursor-pointer
          focus:shadow-[0_0_0.5rem] focus:shadow-primary
          before:w-2 before:h-2 before:rounded-full before:bg-primary
          before:transition-[opacity_0.1s_ease-in-out] before:opacity-0 before:absolute
          checked:before:opacity-100"
        {...props}
      />
      {!!label && (
        <label
          htmlFor={labelFor}
          className={`${labelColorClass[labelColor]} pl-xxs leading-none cursor-pointer`}
        >
          {label}
        </label>
      )}
    </div>
  )
}
