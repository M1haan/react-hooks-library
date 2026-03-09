import { useEffect, useState } from 'react'

/**
 * Хук для дебаунсинга значения
 * @param value Значение для дебаунсинга
 * @param delay Задержка в миллисекундах
 * @returns Дебаунснутое значение
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
