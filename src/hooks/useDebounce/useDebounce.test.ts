import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('test', 500))
    expect(result.current).toBe('test')
  })

  it('should debounce value changes', async () => {
    vi.useFakeTimers()

    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    })

    expect(result.current).toBe('initial')

    rerender({ value: 'changed', delay: 500 })

    expect(result.current).toBe('initial')

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(result.current).toBe('changed')

    vi.useRealTimers()
  })

  it('should reset timer on rapid changes', async () => {
    vi.useFakeTimers()

    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    })

    rerender({ value: 'change1', delay: 500 })
    act(() => vi.advanceTimersByTime(200))

    rerender({ value: 'change2', delay: 500 })
    act(() => vi.advanceTimersByTime(200))

    rerender({ value: 'final', delay: 500 })

    expect(result.current).toBe('initial')

    act(() => vi.advanceTimersByTime(500))

    expect(result.current).toBe('final')

    vi.useRealTimers()
  })
})
