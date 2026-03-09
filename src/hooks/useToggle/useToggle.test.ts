import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useToggle } from './useToggle'

describe('useToggle', () => {
  it('should initialize with default value (false)', () => {
    const { result } = renderHook(() => useToggle())
    const [value] = result.current
    expect(value).toBe(false)
  })

  it('should initialize with given value', () => {
    const { result } = renderHook(() => useToggle(true))
    const [value] = result.current
    expect(value).toBe(true)
  })

  it('should toggle value', () => {
    const { result } = renderHook(() => useToggle(false))

    act(() => {
      result.current[1]()
    })

    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[1]()
    })

    expect(result.current[0]).toBe(false)
  })

  it('should set true and false', () => {
    const { result } = renderHook(() => useToggle(false))

    act(() => {
      result.current[2]()
    })
    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[3]()
    })
    expect(result.current[0]).toBe(false)
  })
})
