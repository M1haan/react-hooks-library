import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useMediaQuery } from './useMediaQuery'

interface MockMediaQueryList {
  matches: boolean
  media: string
  addEventListener: (event: string, callback: (event: { matches: boolean }) => void) => void
  removeEventListener: (event: string, callback: (event: { matches: boolean }) => void) => void
}

type Listener = (event: { matches: boolean }) => void

describe('useMediaQuery', () => {
  let listeners: { [key: string]: Listener[] } = {}
  let matchMediaMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    listeners = {}

    matchMediaMock = vi.fn().mockImplementation(
      (query: string): MockMediaQueryList => ({
        matches: false,
        media: query,
        addEventListener: (event: string, callback: Listener) => {
          if (!listeners[event]) {
            listeners[event] = []
          }
          listeners[event].push(callback)
        },
        removeEventListener: (event: string, callback: Listener) => {
          if (listeners[event]) {
            listeners[event] = listeners[event].filter((cb) => cb !== callback)
          }
        },
      })
    )

    window.matchMedia = matchMediaMock as unknown as typeof window.matchMedia
  })

  it('should return false by default', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'))
    expect(result.current).toBe(false)
  })

  it('should handle media query changes', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'))

    expect(result.current).toBe(false)

    act(() => {
      if (listeners.change) {
        listeners.change.forEach((callback) => {
          callback({ matches: true })
        })
      }
    })

    expect(result.current).toBe(true)
  })

  it('should update when query changes', () => {
    const { result, rerender } = renderHook(({ query }) => useMediaQuery(query), {
      initialProps: { query: '(max-width: 768px)' },
    })

    expect(result.current).toBe(false)
    expect(matchMediaMock).toHaveBeenCalledWith('(max-width: 768px)')

    rerender({ query: '(min-width: 1024px)' })

    expect(matchMediaMock).toHaveBeenCalledWith('(min-width: 1024px)')
  })

  it('should cleanup event listeners on unmount', () => {
    const removeEventListenerMock = vi.fn()

    window.matchMedia = vi.fn().mockImplementation(
      (): MockMediaQueryList => ({
        matches: false,
        media: '',
        addEventListener: vi.fn(),
        removeEventListener: removeEventListenerMock,
      })
    )

    const { unmount } = renderHook(() => useMediaQuery('(max-width: 768px)'))

    unmount()

    expect(removeEventListenerMock).toHaveBeenCalled()
  })
})
