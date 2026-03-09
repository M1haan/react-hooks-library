import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useMediaQuery } from './useMediaQuery'

describe('useMediaQuery', () => {
    let listeners: { [key: string]: ((event: any) => void)[] } = {}
    let matchMediaMock: any

    beforeEach(() => {
        listeners = {}
        
        matchMediaMock = vi.fn().mockImplementation((query) => {
            const mediaQueryList = {
                matches: false,
                media: query,
                addEventListener: (event: string, callback: (event: any) => void) => {
                    if (!listeners[event]) {
                        listeners[event] = []
                    }
                    listeners[event].push(callback)
                },
                removeEventListener: (event: string, callback: (event: any) => void) => {
                    if (listeners[event]) {
                        listeners[event] = listeners[event].filter(cb => cb !== callback)
                    }
                },
                dispatchEvent: (event: Event) => {
                    const eventName = event.type
                    if (listeners[eventName]) {
                        listeners[eventName].forEach(callback => callback(event))
                    }
                }
            }
            return mediaQueryList
        })
        
        window.matchMedia = matchMediaMock
    })

    it('should return false by default', () => {
        const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'))
        expect(result.current).toBe(false)
    })

    it('should handle media query changes', () => {
        const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'))
        
        expect(result.current).toBe(false)
        
        act(() => {
            if (listeners.change && listeners.change.length > 0) {
                listeners.change.forEach(callback => {
                    callback({ matches: true })
                })
            }
        })
        
        expect(result.current).toBe(true)
    })

    it('should update when query changes', () => {
        const { result, rerender } = renderHook(
            ({ query }) => useMediaQuery(query),
            { initialProps: { query: '(max-width: 768px)' } }
        )

        expect(result.current).toBe(false)
        expect(matchMediaMock).toHaveBeenCalledWith('(max-width: 768px)')

        rerender({ query: '(min-width: 1024px)' })

        expect(matchMediaMock).toHaveBeenCalledWith('(min-width: 1024px)')
    })

    it('should cleanup event listeners on unmount', () => {
        const removeEventListenerSpy = vi.fn()
        
        window.matchMedia = vi.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            addEventListener: vi.fn(),
            removeEventListener: removeEventListenerSpy,
        }))

        const { unmount } = renderHook(() => useMediaQuery('(max-width: 768px)'))
        
        unmount()
        
        expect(removeEventListenerSpy).toHaveBeenCalledWith('change', expect.any(Function))
    })
})