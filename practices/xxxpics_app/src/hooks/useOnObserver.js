import { useEffect, useRef, useState } from "react"

const useOnObserver = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    
    const callbackFunction = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        let containerRefValue = null
        const observer = new IntersectionObserver(callbackFunction, options)

        if (containerRef.current) {
            observer.observe(containerRef.current)
            containerRefValue = containerRef.current
        }

        return () => {
            if (containerRefValue) observer.unobserve(containerRefValue)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

export default useOnObserver