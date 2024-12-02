import CustomButton from '../../../General/CustomButton'
import ReusableForm from '../../../General/CustomForm'
import ArrowLeft from '/assets/arrowLeft.svg'
import { useState } from 'react'

const ForgetPassword = () => {
  const [currentStep, setCurrentStep] = useState(0)

  // Configuration for different steps
  const steps = [
    {
      title: 'Forget your password',
      subtitle: 'Please enter your email to reset the password',
      fields: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          required: true,
          label: 'Your Email',
        },
      ],
      buttonLabel: 'Reset Password',
    },
    {
      title: 'Verify your email',
      subtitle: 'Please enter the verification code sent to your email',
      fields: [
        {
          name: 'verificationCode',
          type: 'text',
          placeholder: 'Enter verification code',
          required: true,
          label: 'Verification Code',
        },
      ],
      buttonLabel: 'Verify Code',
    },
    {
      title: 'Create new password',
      subtitle: 'Please enter your new password',
      fields: [
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'New Password',
          required: true,
          label: 'New Password',
        },
        {
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Confirm Password',
          required: true,
          label: 'Confirm Password',
        },
      ],
      buttonLabel: 'Set New Password',
    },
    {
      title: 'Password requirements',
      subtitle: 'Ensure your password meets the following criteria',
      fields: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          required: true,
          label: 'Password',
        },
      ],
      buttonLabel: 'Continue',
    },
    {
      title: 'Success',
      subtitle: 'Your password has been successfully reset',
      fields: [],
      buttonLabel: 'Back to Login',
    },
  ]

  const handleArrowClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle final submission
      console.log('Final step submitted')
    }
  }

  const currentStepConfig = steps[currentStep]

  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="mb-10 flex h-[20%] flex-col">
        {/* Arrow image container */}

        <div
          className="m-6 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full shadow-2xl"
          onClick={handleArrowClick}
        >
          <img src={ArrowLeft} alt="back-icon" className="h-[28px] w-[28px]" />
        </div>

        <div className="mx-auto flex flex-col">
          <h3 className="mb-8 font-sans text-3xl font-medium capitalize text-[#1E1E1E]">
            {currentStepConfig.title}
          </h3>
          <p className="font-sans text-2xl text-[#6D6C69]">
            {currentStepConfig.subtitle}
          </p>
        </div>
      </div>

      {/* The form */}
      <ReusableForm
        fields={currentStepConfig.fields}
        onSubmit={handleSubmit}
        renderCustomButton={(formData, handleSubmit) => (
          <CustomButton
            variant={formData.agreed ? 'primary' : 'inActive'}
            size="large"
            onClick={handleSubmit}
            label={currentStepConfig.buttonLabel}
            disabled={!formData.agreed}
          />
        )}
      />
    </div>
  )
}

export default ForgetPassword
