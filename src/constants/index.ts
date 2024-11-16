import comfortImage from '/assets/comfortIcon.png'
import exploreImage from '/assets/exploreImage.png'
import fastdeliveryImage from '/assets/fastDeliveryImage.png'
import orderTrackImage from '/assets/orderTrackImage.png'
import goggleIcon from '/assets/goggleIcon.svg'
import appleIcon from '/assets/appleIcon.svg'
import facebookIcon from '/assets/facebookIcon.svg'

export const iconsLinks = [
  {
    image: goggleIcon,
    text: 'Continue with goggle',
  },
  {
    image: facebookIcon,
    text: 'Continue with facebook',
  },
  {
    image: appleIcon,
    text: 'Continue with apple',
  },
]

export const onboardings = [
  {
    id: 1,
    image: comfortImage,
    name: 'Comfortability',
    description: 'Order your food from the comfort of your house ',
  },
  {
    id: 2,
    image: fastdeliveryImage,
    name: 'Fast Delivery',
    description: 'Receive goods after 10 minutes.',
  },
  {
    id: 3,
    image: orderTrackImage,
    name: 'Order Tracking',
    description: 'Track your orders in real-time.',
  },
  {
    id: 4,
    image: exploreImage,
    name: 'Explore now to expriences the benefit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
  },
]

// Form
// export type FormField = {
//   name: string
//   label: string
//   type?: string
//   placeholder?: string
//   required?: boolean
//   validation?: (value: string) => string | null
// }

// export type FormProps = {
//   fields: FormField[]
//   onSubmit: (data: Record<string, string>) => void
// }

export type InputType = 'text' | 'email' | 'password' | 'tel' | 'number'

// Interface for field configuration
export interface FormFieldConfig {
  name: string
  label: string
  type: InputType
  placeholder: string
  required?: boolean
  validation?: (value: string) => string | null
}

export interface ReusableFormProps {
  fields: FormFieldConfig[]
  onSubmit: (data: Record<string, string>) => void
  buttonText?: string
  className?: string
}
