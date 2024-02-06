'use client'

import { Button } from '@/components/Button/Button'
import { Checkbox } from '@/components/Checkbox/Checkbox'
import { Heading } from '@/components/Heading/Heading'
import { Radio } from '@/components/Radio/Radio'
import { cn } from '@/utils/merge-classnames'
import { IconFilter, IconX } from '@tabler/icons-react'
import { useState } from 'react'

type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

export const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleFilter = () => {
    onFilter(values)
    setIsOpen(false)
  }

  return (
    <div
      className={
        isOpen
          ? `max-md:z-modal max-md:fixed max-md:w-full max-md:h-screen max-md:flex max-md:flex-col
          max-md:top-0 max-md:left-0`
          : ''
      }
    >
      <div
        aria-hidden={isOpen}
        className={cn(
          'transition-[opacity_0.3s_ease-in-out] opacity-0 absolute',
          isOpen
            ? `max-md:z-modal max-md:bg-white max-md:top-0 max-md:left-0 max-md:fixed
            max-md:w-full max-md:h-screen max-md:opacity-100`
            : ''
        )}
        data-testid="explore-sidebar-overlay"
      />

      <div
        className={cn(
          'cursor-pointer w-6 h-6 min-md:hidden z-modal',
          isOpen
            ? 'max-md:text-black max-md:[&>svg]:absolute max-md:[&>svg]:w-7 max-md:[&>svg]:right-2 max-md:[&>svg]:top-2'
            : 'max-md:text-white'
        )}
      >
        <IconFilter
          aria-label="open filters"
          onClick={() => setIsOpen(true)}
          className={isOpen ? 'max-md:hidden' : ''}
        />
        <IconX
          aria-label="close filters"
          onClick={() => setIsOpen(false)}
          className={!isOpen ? 'max-md:hidden' : ''}
        />
      </div>

      <div
        className={cn(
          `flex-[1] overflow-y-auto px-sm mt-14 mb-5 transition-[transform_0.3s_ease-in-out]
          min-md:overflow-y-visible min-md:p-0 min-md:mt-0 min-md:mb-0`,
          isOpen
            ? 'max-md:mt-md max-md:translate-y-0 max-md:overflow-y-scroll max-md:z-modal'
            : 'max-md:translate-y-7 max-md:h-0 max-md:invisible max-md:absolute max-md:left-0'
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="[&>div:not(:last-of-type)]:mb-xs [&+div]:border-t
            [&+div]:border-[rgba(#8F8F8F,_0.2)] [&+div]:mt-sm [&+div]:pt-xs"
          >
            <Heading
              lineBottom
              lineColor="secondary"
              size="sm"
              className={
                isOpen
                  ? '[&>h2]:max-md:text-black max-md:text-xl max-md:font-normal'
                  : ''
              }
            >
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={!!values[field.name]}
                  onCheck={(v) => handleChange(field.name, v)}
                  labelColor={isOpen ? 'black' : undefined}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={field.name === values[item.name]}
                  onChange={() => handleChange(item.name, field.name)}
                  labelColor={isOpen ? 'black' : undefined}
                />
              ))}
          </div>
        ))}
      </div>

      <div
        className={cn(
          'shadow-[0_-2px_4px_rgba(#030517,0.2)] p-sm',
          isOpen
            ? 'max-md:z-modal'
            : 'max-md:invisible max-md:absolute max-md:left-0'
        )}
      >
        <Button
          fullWidth
          size="md"
          as={{ type: 'button', props: { onClick: handleFilter } }}
        >
          Filter
        </Button>
      </div>
    </div>
  )
}
