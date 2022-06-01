import { useLayoutEffect, useState } from "react"

export const useTextBadge = () => {
  const [textBadge, setTextBadge] = useState('')

  useLayoutEffect(() => {
    setTimeout(() => {
      setTextBadge('New')
    }, 1000)
  }, [])
  return {}
}