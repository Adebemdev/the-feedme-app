import SplashIcon from '/assets/splashIcon.svg'
import { useEffect, useState } from 'react'

interface SplashProps {
    duration?: number
}

const Splash: React.FC<SplashProps> = ({ duration = 3000 }) => {
    const [isVisible, setIsvisible] = useState<boolean>(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsvisible(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            className={`${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'} font-sans-sono fixed inset-0 flex h-screen items-center justify-center bg-primaryColor transition-opacity duration-1000 ease-in-out`}
        >
            <img src={SplashIcon} alt="" className="" width={300} />
        </div>
    )
}

export default Splash
