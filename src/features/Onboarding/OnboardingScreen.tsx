import { useEffect, useState } from 'react'
import CustomButton from '../../General/CustomButton'
import { onboardings } from '../../constants'
import Splash from '../../ui/Splash'
import { useNavigate } from 'react-router'

type onboardingMember = {
  name: string
  description: string
  image: string
  id: number
}

const OnboardingScreen = () => {
  const navigate = useNavigate()
  const [showSplash, setShowSplash] = useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const currentMember: onboardingMember = onboardings[currentIndex]
  const isLastScreen = currentIndex === onboardings.length - 1

  const handleNext = () => {
    if (currentIndex < onboardings.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleSkipToLast = () => {
    setCurrentIndex(onboardings.length - 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <Splash />
  }

  const handleGetStarted = () => {
    navigate('/authPage')
  }

  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-slate-50">
      <div className="flex flex-col items-center justify-center">
        {/* Image container */}
        <div className="mx-auto mb-8 flex h-[50vh] w-[90%] items-center justify-center">
          <img
            src={currentMember.image}
            alt={`${currentMember.name}`}
            className="size-full object-contain"
          />
        </div>
        {/* Text container */}
        <div
          className={`flex h-40 w-full flex-col items-center justify-center gap-2 px-4 text-center ${isLastScreen ? 'space-y-2' : ''}`}
        >
          <p
            className={`font-sans text-4xl font-bold text-primaryColor ${isLastScreen ? 'mb-4' : ''}`}
          >
            {currentMember.name}
          </p>
          <p
            className={`font-sans text-3xl leading-10 text-gray-500 ${isLastScreen ? 'mb-10' : ''}`}
          >
            {currentMember.description}
          </p>
        </div>
        {/* Progress dot */}
        {!isLastScreen && (
          <div className="flex h-20 w-full items-center justify-center gap-4">
            {onboardings.map((_, index) => (
              <div
                key={index}
                className={`h-5 w-5 rounded-full ${
                  index === currentIndex ? 'bg-primaryColor' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* Button container */}
        <div
          className={`flex h-[40%] w-full flex-col gap-4 p-8 ${isLastScreen ? 'mt-10' : ''}`}
        >
          {isLastScreen ? (
            <CustomButton
              size="large"
              variant="primary"
              onClick={handleGetStarted}
              className="transform text-2xl transition-transform duration-150 active:scale-95"
            >
              Get started
            </CustomButton>
          ) : (
            <>
              <CustomButton
                size="large"
                variant="primary"
                onClick={handleNext}
                className="transform text-2xl transition-transform duration-150 active:scale-95"
              >
                Next
              </CustomButton>
              <CustomButton
                size="large"
                variant="secondary"
                onClick={handleSkipToLast}
                className="transform text-2xl transition-transform duration-150 active:scale-95"
              >
                Skip
              </CustomButton>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default OnboardingScreen
