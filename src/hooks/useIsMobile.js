import { useEffect, useState } from 'react'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    const updateViewport = (event) => {
      setIsMobile(event.matches)
    }

    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener?.('change', updateViewport)

    return () => {
      mediaQuery.removeEventListener?.('change', updateViewport)
    }
  }, [])

  return isMobile
}
