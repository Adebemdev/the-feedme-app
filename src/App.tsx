// import Splash from './ui/Splash'
import OnboardingScreen from './features/Onboarding/OnboardingScreen'
// import { useEffect, useState } from 'react'

const App: React.FC = () => {
    // const [showSplash, setShowSplash] = useState<boolean>(true)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowSplash(false)
    //     }, 4000)

    //     return () => clearTimeout(timer)
    // }, [])

    return (
        <div>
            <OnboardingScreen />
        </div>
    )
}

export default App
