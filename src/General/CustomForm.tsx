import { useState } from 'react'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import CustomButton, { ButtonVariant, ButtonSize } from './CustomButton'

export interface FormField {
  name: string
  type: string
  placeholder?: string
  label?: string
  checked?: boolean
  renderAs?: string
  required?: boolean
  linkText?: string // Optional text for the link
  linkHref?: string
}

interface ReusableFormProps {
  fields: FormField[]
  onSubmit: (data: Record<string, string | boolean>) => void
  buttonText?: string
  buttonConfig?: {
    variant: ButtonVariant
    size: ButtonSize
    className?: string
  } | null // null means no button will be rendered
  renderCustomButton?: (
    formData: Record<string, string | boolean>,
    handleSubmit: (e: React.FormEvent) => void
  ) => React.ReactNode
  className?: string
}

const ReusableForm = ({
  fields,
  onSubmit,
  buttonConfig,
  renderCustomButton,
  buttonText = 'Submit',
}: ReusableFormProps) => {
  // Initialize form data with appropriate default values based on input type
  const initialFormData = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: field.type === 'checkbox' ? false : '',
    }),
    {}
  )

  const [formData, setFormData] =
    useState<Record<string, string | boolean>>(initialFormData)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | CheckboxChangeEvent
  ): void => {
    const { checked } = e.target
    const name = e.target.name || e.target.id
    if (typeof name !== 'string') {
      console.error('Invalid field name:', name)
      return // Prevent updating invalid fields
    }
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-8 overflow-hidden p-6"
    >
      {fields?.map((field) => (
        <div
          key={field.name}
          className="flex flex-1 flex-col items-center justify-center"
        >
          {field.renderAs === 'checkbox' ? (
            <label
              htmlFor={field.name}
              className="flex items-center justify-center gap-6"
            >
              {/* <input
                type="checkbox"
                name={field.name}
                checked={formData[field.name] as boolean}
                onChange={handleChange}
                className="h-10 w-10 max-w-full rounded-lg border-primaryColor p-4 text-primaryColor accent-primaryColor focus:ring-primaryColor"
              /> */}
              <div className="custom-checkbox">
                <Checkbox
                  name={field.name}
                  onChange={handleChange}
                  checked={formData[field.name] as boolean}
                />
              </div>
              <span className="text-gray-700">{field.label}</span>
            </label>
          ) : field.renderAs === 'link' ? (
            <a
              href="/forgetPassword"
              className="my-20 text-center font-sans font-light text-primaryColor"
            >
              {field.linkText || 'Forget Password?'}
            </a>
          ) : (
            <div className="w-full">
              {field.label && (
                <label
                  htmlFor={field.name}
                  className="mb-2 block font-sans text-2xl font-medium text-[#6D6C69]"
                >
                  {field.label}
                </label>
              )}
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] as string}
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-slate-300 bg-slate-50 p-6 font-sans text-3xl font-normal capitalize text-[#6D6C69] focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
          )}
        </div>
      ))}
      <div>
        {renderCustomButton ? (
          renderCustomButton(formData, handleSubmit)
        ) : buttonConfig ? (
          <CustomButton
            variant={buttonConfig.variant}
            size={buttonConfig.size}
            onClick={handleSubmit}
            label={buttonText}
            className={buttonConfig.className}
          />
        ) : null}
      </div>
    </form>
  )
}

export default ReusableForm
