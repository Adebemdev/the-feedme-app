import { useState } from 'react'
import CustomButton from './CustomButton'
import { iconsLinks } from '../constants'

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
}

const ReusableForm: React.FC<ReusableFormProps> = ({
  fields,
  onSubmit,
  buttonText = 'Submit',
}) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 p-8">
      {fields.map((field) => (
        <div
          key={field.name}
          className="flex w-full flex-col items-center justify-center"
        >
          {field.renderAs === 'checkbox' ? (
            <label className="flex cursor-pointer items-center justify-center gap-4 space-x-2 p-4">
              <input
                type="checkbox"
                name={field.name}
                checked={formData[field.name] as boolean}
                onChange={handleChange}
                className="h-10 w-10 rounded-lg border-primaryColor p-4 text-primaryColor accent-primaryColor focus:ring-primaryColor"
              />
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
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] as string}
              onChange={handleChange}
              className="m-2 w-full rounded-lg border-2 border-slate-300 bg-slate-50 p-6 font-sans text-3xl font-normal capitalize text-[#6D6C69] focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          )}
        </div>
      ))}
      <div>
        <CustomButton
          variant="primary"
          size="large"
          onClick={() => {}}
          label={buttonText}
        />
      </div>
    </form>
  )
}

export default ReusableForm
