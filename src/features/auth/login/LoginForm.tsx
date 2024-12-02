import { iconsLinks } from '../../../constants'
import CustomButton from '../../../General/CustomButton'
import ReusableForm from '../../../General/CustomForm'

const LoginForm = () => {
  const registrationFields = [
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Phone number',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
      required: true,
      // validation: passwordValidation
    },
    {
      name: 'forgetPassword',
      type: 'text', // type is not used here
      renderAs: 'link',
      linkText: 'Forget Password?',
      linkHref: '/forget-password',
    },
  ]

  const handleLoginForm = (data: Record<string, string | boolean>) => {
    console.log('Registration data:', data)
  }

  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="flex h-40 w-full items-center justify-center">
        <h1 className="mt-4 font-sans text-[32px] font-semibold capitalize">
          Login
        </h1>
      </div>
      <div>
        <ReusableForm
          fields={registrationFields}
          onSubmit={handleLoginForm}
          buttonText="Login"
          renderCustomButton={(formData, handleSubmit) => (
            <div className="w-full">
              <CustomButton
                variant="primary"
                size="large"
                onClick={handleSubmit}
                label="Login"
              />
            </div>
          )}
        />
      </div>
      {/* Horizontal line container  */}
      <div className="mb-4 flex w-full items-center justify-center gap-4 p-4">
        <hr className="border-1 w-1/4 border-[#6D6C69]" />
        <span className="font-sans text-3xl font-semibold capitalize text-[#6D6C69]">
          or log in with
        </span>
        <hr className="border-1 w-1/4 border-[#6D6C69]" />
      </div>

      {/* Icon button container */}
      <div className="my-10 flex h-20 w-full items-center justify-center gap-4">
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
        <p className="text-3xl text-[#6D6C69]">
          Don't have an account ?{' '}
          <a href="/registrationform" className="capitalize text-red-400">
            sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
