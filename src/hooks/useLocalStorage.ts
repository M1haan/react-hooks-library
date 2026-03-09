import { useState, useEffect, useCallback } from 'react'

type SetValue<T> = (value: T | ((prev: T) => T)) => void

/**
 * Хук для синхронизации состояния с localStorage
 * @param key Ключ в localStorage
 * @param initialValue Начальное значение
 * @returns [storedValue, setValue]
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, SetValue<T>] {
    // Функция для чтения из localStorage
    const readValue = useCallback((): T => {
        if (typeof window === 'undefined') {
            return initialValue
        }

        try {
            const item = window.localStorage.getItem(key)
            return item ? (JSON.parse(item) as T) : initialValue
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error)
            return initialValue
        }
    }, [key, initialValue])

    const [storedValue, setStoredValue] = useState<T>(readValue)

    const setValue: SetValue<T> = useCallback(
        (value) => {
            if (typeof window === 'undefined') {
                console.warn(
                    `Tried setting localStorage key "${key}" even though environment is not a client`
                )
            }

            try {
                const newValue = value instanceof Function ? value(storedValue) : value
                window.localStorage.setItem(key, JSON.stringify(newValue))
                setStoredValue(newValue)
                window.dispatchEvent(new Event('local-storage-change'))
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error)
            }
        },
        [key, storedValue]
    )

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key && event.newValue !== null) {
                setStoredValue(JSON.parse(event.newValue))
            }
        }

        const handleCustomEvent = () => {
            setStoredValue(readValue())
        }

        window.addEventListener('storage', handleStorageChange)
        window.addEventListener('local-storage-change', handleCustomEvent)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener('local-storage-change', handleCustomEvent)
        }
    }, [key, readValue])

    return [storedValue, setValue]
}