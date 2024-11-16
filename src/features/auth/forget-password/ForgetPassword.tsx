import ReusableForm from '../../../General/CustomForm'
import ButtonIcon from '/assets/button-icon.svg'

const ForgetPassword = () => {
  const passwordFields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      required: true,
      label: 'Your Email',
      // validation: emailValidation
    },
  ]

  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="mb-10 flex h-[20%] flex-col">
        <img src={ButtonIcon} alt="image-icon" className="h-40 w-40" />
        <div className="mx-auto flex flex-col">
          <h3 className="mb-8 font-sans text-3xl capitalize text-[#1E1E1E]">
            Forget your password
          </h3>
          <p className="text-[#989898 font-sans text-2xl">
            Please enter your email to reset the password
          </p>
        </div>
      </div>
      <ReusableForm
        onSubmit={() => {}}
        buttonText="forget password"
        fields={passwordFields}
      />
    </div>
  )
}

export default ForgetPassword
