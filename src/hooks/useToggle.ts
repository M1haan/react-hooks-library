import { useState, useCallback } from 'react'

/**
 * Хук для управления булевым состоянием (переключатель)
 * @param initialValue Начальное значение (по умолчанию false)
 * @returns [value, toggle, setTrue, setFalse]
 */
export function useToggle(initialValue: boolean = false): [
    boolean,
    () => void,
    () => void,
    () => void
] {
    const [value, setValue] = useState(initialValue)

    const toggle = useCallback(() => {
        setValue(v => !v)
    }, [])

    const setTrue = useCallback(() => {
        setValue(true)
    }, [])

    const setFalse = useCallback(() => {
        setValue(false)
    }, [])

    return [value, toggle, setTrue, setFalse]
}