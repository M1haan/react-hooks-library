import { useEffect, RefObject } from 'react'

export type Handler = (event: MouseEvent | TouchEvent) => void

/**
 * Хук для отслеживания кликов вне элемента
 * @param ref Ref объекта, клики вне которого нужно отслеживать
 * @param handler Функция-обработчик
 */
export function useClickAway<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: Handler
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current
      
      if (!el) {
        return
      }
      
      if (el.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}