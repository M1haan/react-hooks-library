import { renderHook, act, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useAsync } from './useAsync'

describe('useAsync', () => {
    it('should handle successful async operation', async () => {
        const asyncFn = vi.fn().mockResolvedValue('success')

        const { result } = renderHook(() => useAsync(asyncFn))

        expect(result.current.loading).toBe(false)
        expect(result.current.data).toBe(null)
        expect(result.current.error).toBe(null)

        let promiseResult
        await act(async () => {
            promiseResult = await result.current.execute()
        })

        expect(promiseResult).toBe('success')
        expect(result.current.loading).toBe(false)
        expect(result.current.data).toBe('success')
        expect(result.current.error).toBe(null)
    })

    it('should handle failed async operation', async () => {
        const error = new Error('Failed')
        const asyncFn = vi.fn().mockRejectedValue(error)

        const { result } = renderHook(() => useAsync(asyncFn))

        await act(async () => {
            await result.current.execute()
        })

        expect(result.current.loading).toBe(false)
        expect(result.current.data).toBe(null)
        expect(result.current.error).toBe(error)
    })

    it('should reset state', async () => {
        const asyncFn = vi.fn().mockResolvedValue('success')

        const { result } = renderHook(() => useAsync(asyncFn))

        await act(async () => {
            await result.current.execute()
        })

        expect(result.current.data).toBe('success')

        act(() => {
            result.current.reset()
        })

        expect(result.current.loading).toBe(false)
        expect(result.current.data).toBe(null)
        expect(result.current.error).toBe(null)
    })
})