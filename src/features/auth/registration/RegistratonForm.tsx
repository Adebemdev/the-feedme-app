import ReusableForm from '../../../General/CustomForm'
import { iconsLinks } from '../../../constants'
const RegistrationForm = () => {
  const registrationFields = [
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Phone number',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      required: true,
      // validation: emailValidation
    },

    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
      required: true,
      // validation: passwordValidation
    },
    {
      name: 'confirm password',
      type: 'password',
      placeholder: 'Confrim password',
      required: true,
      // validation: passwordValidation
    },
    {
      name: 'rememberMe',
      label: 'Remember me',
      type: 'checkbox',
      renderAs: 'checkbox',
    },
  ]

  const handleRegistration = (data: Record<string, string | boolean>) => {
    console.log('Registration data:', data)
  }
  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="flex h-40 w-full items-center justify-center">
        <h1 className="mt-4 font-sans text-[32px] font-semibold capitalize">
          Registration
        </h1>
      </div>

      {/* Custom form container */}
      <div>
        <ReusableForm
          fields={registrationFields}
          onSubmit={handleRegistration}
          buttonText="Sign Up"
        />
      </div>
      {/* Horizontal line container  */}
      <div className="mb-4 flex w-full items-center justify-center gap-4 p-4">
        <hr className="border-1 w-1/4 border-[#6D6C69]" />
        <span className="font-sans text-3xl font-semibold capitalize text-[#6D6C69]">
          or sign up with
        </span>
        <hr className="border-1 w-1/4 border-[#6D6C69]" />
      </div>

      {/* Icon button container */}
      <div className="my-4 flex h-20 w-full items-center justify-center gap-4">
        {iconsLinks.map((iconLink, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => alert('Hello')}
          >
            <img src={iconLink.image} alt="" className="h-16 w-16" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <p className="text-2xl">
          Already have account ?{' '}
          <a href="/loginform" className="capitalize text-red-400">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}

export default RegistrationForm
