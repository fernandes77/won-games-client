'use client'

import { useState } from 'react'

type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number
} & React.InputHTMLAttributes<HTMLInputElement>

const color = { white: 'text-white', black: 'text-black' }

export const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  // controlled component (state)
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked // true => false => true
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <div className="flex items-center">
      <input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        className="cursor-pointer flex items-center justify-center appearance-none
          w-[1.125rem] h-[1.125rem] border-2 border-solid border-gray-dark rounded-sm
          relative outline-none transition-[background_border_0.1s_ease-in-out]
          before:w-1.5 before:h-[0.5625rem] before:border-white before:border-t-0
          before:border-l-0 before:transform-[rotate(45deg)] before:absolute
          before:top-[1px] before:opacity-0 before:transition-[0.1s_ease-in-out]
          focus:shadow-primary focus:shadow-[0_0_0.5rem]
          checked:border-primary checked:bg-primary checked:before:opacity-100"
        {...props}
      />
      {!!label && (
        <label
          htmlFor={labelFor}
          className={`${color[labelColor]} cursor-pointer pl-xxs leading-[1.125rem]`}
        >
          {label}
        </label>
      )}
    </div>
  )
}
