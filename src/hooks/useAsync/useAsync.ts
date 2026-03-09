import { useCallback, useState } from 'react'

interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

type AsyncFn<T, Args extends unknown[]> = (...args: Args) => Promise<T>

export function useAsync<T, Args extends unknown[] = unknown[]>(
  asyncFn: AsyncFn<T, Args>
): {
  execute: (...args: Args) => Promise<T | null>
  data: T | null
  loading: boolean
  error: Error | null
  reset: () => void
} {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const execute = useCallback(
    async (...args: Args): Promise<T | null> => {
      setState({ data: null, loading: true, error: null })

      try {
        const result = await asyncFn(...args)
        setState({ data: result, loading: false, error: null })
        return result
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error : new Error(String(error)),
        })
        return null
      }
    },
    [asyncFn]
  )

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null })
  }, [])

  return {
    execute,
    ...state,
    reset,
  }
}
