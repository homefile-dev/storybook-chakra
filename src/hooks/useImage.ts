import { useState, useEffect } from 'react'

export const useImage = (src: string) => {
  const [isWidthBiggerThanHeight, setIsWidthBiggerThanHeight] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [hasStartedInitialFetch, setHasStartedInitialFetch] = useState(false)

  useEffect(() => {
    setHasLoaded(false)
    setHasStartedInitialFetch(true)

    const image = new Image()
    image.src = src

    const handleLoad = () => {
      setHasLoaded(true)
    }

    image.onload = handleLoad

    setIsWidthBiggerThanHeight(image.width > image.height)

    return () => {
      image.removeEventListener('load', handleLoad)
    }
  }, [src])

  return { hasLoaded, hasStartedInitialFetch, isWidthBiggerThanHeight }
}
