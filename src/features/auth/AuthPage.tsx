import CustomButton from '../../General/CustomButton'
import { iconsLinks } from '../../constants'
import { useNavigate } from 'react-router'
const Welcome: React.FC = () => {
  const navigate = useNavigate()

  function handleSignUp() {
    // alert('Is time for you to sign Up!!')
    navigate('/registrationform')
  }
  function handleLogin() {
    // alert('Is time for you to Login!!')
    navigate('/loginform')
  }

  return (
    <div className="flex h-screen w-full flex-col items-center bg-slate-50">
      {/* Welcome h1 container */}
      <div className="mb-12 flex h-40 w-full items-center justify-center">
        <h1 className="mt-4 font-sans text-[32px] font-semibold capitalize">
          Welcome
        </h1>
      </div>
      {/* Sign button */}
      <div className="flex h-[30%] w-full cursor-pointer flex-col justify-center gap-8 p-8">
        <CustomButton
          size="large"
          variant="primary"
          onClick={handleSignUp}
          className=""
        >
          Sign up
        </CustomButton>
        <CustomButton
          size="large"
          variant="tertiary"
          onClick={handleLogin}
          className=""
        >
          Login
        </CustomButton>
      </div>

      {/* Horizontal line container  */}
      <div className="mb-4 flex w-full items-center justify-center gap-4 p-4">
        <hr className="border-1 w-1/2 border-[#D9D9D9]" />
        <span className="font-sans text-3xl font-semibold capitalize text-[#D9D9D9]">
          or
        </span>
        <hr className="border-1 w-1/2 border-[#D9D9D9]" />
      </div>

      {/* Icon button container */}
      <div className="flex h-[28%] w-full flex-col items-center justify-center gap-4 p-4">
        {iconsLinks.map((iconLink, index) => (
          <div
            key={index}
            className="flex h-[28%] w-3/4 cursor-pointer items-center gap-6 px-4 capitalize"
            onClick={() => alert('Hello')}
          >
            <img src={iconLink.image} alt="" className="h-16 w-16" />
            <span className="text-[14px] font-semibold text-[#1E1E1E]">
              {iconLink.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Welcome
