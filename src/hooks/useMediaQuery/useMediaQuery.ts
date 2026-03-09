import { useState, useEffect } from 'react'

/**
 * Хук для отслеживания медиа-запросов
 * @param query Медиа-запрос (например: '(max-width: 768px)')
 * @returns Булево значение, соответствует ли запрос
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches
        }
        return false
    })

    useEffect(() => {
        if (typeof window === 'undefined') return

        const mediaQueryList = window.matchMedia(query)

        setMatches(mediaQueryList.matches)

        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        mediaQueryList.addEventListener('change', handleChange)

        return () => {
            mediaQueryList.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}